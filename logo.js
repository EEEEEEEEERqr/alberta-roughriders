// Alberta Roughriders logo
(function(){
  var L="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'><defs><filter id='glow' x='-50%' y='-50%' width='200%' height='200%'><feGaussianBlur stdDeviation='2.5' result='coloredBlur'/><feMerge><feMergeNode in='coloredBlur'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><ellipse cx='52' cy='62' rx='28' ry='16' fill='%231a1a1a' stroke='%23ff4d9e' stroke-width='1.5'/><path d='M35 55 Q28 40 32 28 Q36 22 42 28 L45 48 Z' fill='%231a1a1a' stroke='%23ff4d9e' stroke-width='1.5'/><circle cx='48' cy='32' r='7' fill='%23ff4d9e'/><path d='M42 38 L54 38 L52 55 L44 55 Z' fill='%23ff4d9e'/><circle cx='68' cy='28' r='12' fill='none' stroke='%23ff4d9e' stroke-width='2' stroke-dasharray='3 2' filter='url(%23glow)'/><path d='M38 72 L36 88 M48 74 L50 90 M58 72 L62 88 M66 70 L72 85' stroke='%23ff4d9e' stroke-width='2.5' stroke-linecap='round'/></svg>";
  function a(){
    document.querySelectorAll("img.team-logo,img[alt*=Roughriders]").forEach(function(i){
      if(!i.getAttribute("data-fixed")){
        i.src=L;
        i.setAttribute("data-fixed","1");
      }
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",a);else a();
})();
