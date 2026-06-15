(function(){
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w=0,h=0,particles=[],time=0;
  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, {passive:true});
  function rand(min,max){ return Math.random()*(max-min)+min }
  class P{
    constructor(){
      this.reset();
      this.hue = rand(250,290); // purple-green hue range
    }
    reset(){
      this.x = rand(0,w);
      this.y = rand(0,h);
      this.vx = rand(-0.5,0.5);
      this.vy = rand(-0.8,0.8);
      this.r = rand(0.8,2.2);
      this.alpha = rand(0.3,0.95);
    }
    step(){
      this.x += this.vx; this.y += this.vy;
      this.alpha += rand(-0.02,0.02);
      this.alpha = Math.max(0.1, Math.min(1, this.alpha));
      if(this.x < -10 || this.x > w+10 || this.y < -10 || this.y > h+10) this.reset();
    }
    draw(){
      ctx.beginPath();
      const hue = this.hue + (time * 0.1);
      ctx.fillStyle = `hsla(${hue},80%,50%,${this.alpha})`;
      ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.fill();
    }
  }
  function init(){
    resize();
    particles = [];
    const count = Math.ceil((w*h)/50000); // more particles
    for(let i=0;i<count;i++) particles.push(new P());
    requestAnimationFrame(loop);
  }
  function loop(){
    time++;
    ctx.clearRect(0,0,w,h);
    // animated gradient: purple to green with time-based shift
    const g1 = ctx.createLinearGradient(0,0,w,h);
    const offset = Math.sin(time * 0.001) * 0.1;
    g1.addColorStop(0, `hsla(270,${60+offset*10}%,15%,0.95)`); // purple
    g1.addColorStop(0.5, `hsla(255,${70+offset*20}%,20%,0.9)`);
    g1.addColorStop(1, `hsla(140,${65+offset*15}%,25%,0.95)`); // green
    ctx.fillStyle = g1; 
    ctx.fillRect(0,0,w,h);

    // draw particles with glowing effect
    for(let i=0;i<particles.length;i++){
      const p = particles[i];
      p.step();
      // glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = `hsla(${p.hue + time*0.1},80%,50%,${p.alpha*0.5})`;
      p.draw();
      
      // draw lines between nearby particles
      for(let j=i+1;j<particles.length;j++){
        const q = particles[j];
        const dx = p.x-q.x, dy = p.y-q.y; const d = Math.hypot(dx,dy);
        if(d < 140){
          ctx.beginPath();
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(${(p.hue+q.hue)/2},70%,50%,0.3)`;
          const g2 = ctx.createLinearGradient(p.x,p.y,q.x,q.y);
          g2.addColorStop(0, `hsla(${p.hue},70%,50%,${(1-d/140)*0.12})`);
          g2.addColorStop(1, `hsla(${q.hue},70%,50%,${(1-d/140)*0.12})`);
          ctx.strokeStyle = g2;
          ctx.lineWidth = 1.5;
          ctx.moveTo(p.x,p.y); 
          ctx.lineTo(q.x,q.y); 
          ctx.stroke();
        }
      }
    }
    ctx.shadowBlur = 0;
    requestAnimationFrame(loop);
  }
  window.addEventListener('load', init, {passive:true});
})();