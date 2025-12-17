/* HEX MATRIX (left pane) */
(() => {
  const canvas = document.getElementById('hex-canvas');
  const ctx = canvas.getContext('2d');
  const YELLOW = getComputedStyle(document.documentElement).getPropertyValue('--hbv-yellow').trim() || '#FFF244';
  const GREEN  = getComputedStyle(document.documentElement).getPropertyValue('--matrix-green').trim() || '#6af072';
  let W = 0, H = 0, LEFT_W = 0, DPR = 1;
  const LEFT_PORTION = 0.38, TRAIL_ALPHA=0.13, BASE_SPACING=22, SPEED_MIN=0.6, SPEED_MAX=1.8, HEAD_GLOW=9, GLYPH_STEPS=9;
  let streams = [];
  function hexPath(cx, cy, r) {
    const a = Math.PI / 3; ctx.beginPath();
    for (let i=0;i<6;i++){ const x=cx+r*Math.cos(a*i), y=cy+r*Math.sin(a*i); i?ctx.lineTo(x,y):ctx.moveTo(x,y); }
    ctx.closePath();
  }
  function choice(a){return a[Math.floor(Math.random()*a.length)]} function rand(min,max){return Math.random()*(max-min)+min}
  function rebuild() {
    streams.length=0;
    const spacing=Math.max(16, BASE_SPACING*(W/1280));
    const count=Math.max(12, Math.floor(LEFT_W/spacing));
    for(let i=0;i<count;i++){
      const x=Math.round((i+0.5)*(LEFT_W/count)+rand(-6,6));
      const r=rand(8,18)*(W/1280+0.6);
      const v=rand(SPEED_MIN,SPEED_MAX)*DPR;
      const color=choice([YELLOW,GREEN]);
      const pattern=Math.random()<0.5?'outline-first':'fill-first';
      streams.push({x, y:rand(-H,0), r, v, color, pattern, offset:Math.floor(rand(0,GLYPH_STEPS))});
    }
  }
  function resize(){
    DPR=Math.min(2, devicePixelRatio||1);
    W=canvas.width=innerWidth; H=canvas.height=innerHeight; LEFT_W=Math.floor(W*LEFT_PORTION);
    canvas.width=Math.floor(W*DPR); canvas.height=Math.floor(H*DPR);
    canvas.style.width=W+'px'; canvas.style.height=H+'px'; ctx.setTransform(DPR,0,0,DPR,0,0);
    rebuild(); ctx.clearRect(0,0,W,H);
  }
  function hexToRgba(hex,a){let r=255,g=242,b=68;if(/^#([0-9a-f]{3}){1,2}$/i.test(hex)){let c=hex.substring(1);if(c.length===3)c=c.split('').map(ch=>ch+ch).join('');r=parseInt(c.substr(0,2),16);g=parseInt(c.substr(2,2),16);b=parseInt(c.substr(4,2),16);} return `rgba(${r},${g},${b},${a})`; }
  function drawHex(cx,cy,r,filled,color,alpha,glow=false){
    ctx.save();
    if(glow){ctx.shadowColor=color;ctx.shadowBlur=HEAD_GLOW;}
    hexPath(cx,cy,r);
    if(filled){const fallback=color.startsWith('#')?hexToRgba(color,alpha):`rgba(255,242,68,${alpha})`; ctx.fillStyle=fallback; ctx.fill(); ctx.lineWidth=1; ctx.strokeStyle=color===YELLOW?'rgba(255,242,68,0.25)':'rgba(106,240,114,0.25)'; ctx.stroke();}
    else{ctx.lineWidth=[1,1,1.5,2][Math.floor(Math.random()*4)]; ctx.strokeStyle=color===YELLOW?`rgba(255,242,68,${alpha})`:`rgba(106,240,114,${alpha})`; ctx.stroke();}
    ctx.restore();
  }
  function tick(){
    ctx.fillStyle=`rgba(0,0,0,${TRAIL_ALPHA})`; ctx.fillRect(0,0,LEFT_W,H);
    for(const s of streams){
      s.y+=s.v; if(s.y-GLYPH_STEPS*s.r*1.7>H){ s.y=-Math.random()*(H*.5); s.r=Math.random()*(18-8)+8*(W/1280+0.6); s.v=rand(SPEED_MIN,SPEED_MAX)*DPR; s.color=choice([YELLOW,GREEN]); s.pattern=Math.random()<0.5?'outline-first':'fill-first'; s.offset=Math.floor(rand(0,GLYPH_STEPS)); }
      const step=s.r*1.7;
      for(let i=0;i<GLYPH_STEPS;i++){
        const y=s.y-i*step; if(y<-s.r||y>H+s.r) continue;
        const alpha=Math.max(0,0.12-i*(0.12/GLYPH_STEPS))+(i===0?0.08:0);
        const filled=s.pattern==='fill-first'?((i+s.offset)%2===0):((i+s.offset)%2===1);
        drawHex(s.x,y,s.r,filled,s.color,alpha,i===0);
      }
    }
    requestAnimationFrame(tick);
  }
  let raf, throttle; function onResize(){ cancelAnimationFrame(raf); clearTimeout(throttle); throttle=setTimeout(()=>{resize(); raf=requestAnimationFrame(tick);},80); }
  addEventListener('resize', onResize, {passive:true}); resize(); requestAnimationFrame(tick);
})();
