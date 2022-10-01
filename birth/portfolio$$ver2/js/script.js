let clickLogo=document.querySelector('.logo a');
let showMenu=document.querySelector('#header-gnb');
let hideSns=document.querySelector('#footer-inner')

clickLogo.addEventListener('click',function(){
  showMenu.classList.toggle('show');
  hideSns.classList.toggle('show');
});
//header, footer --end

document.querySelector('.first').addEventListener('click',function(){
  document.querySelector('.wrap').style.backgroundColor="rgb(24, 85, 239)";
	document.querySelector('#container-main').style.width="100%";
  document.querySelector('#container-main').style.display="block";
  document.querySelector('#container-album').style.width=0;
  document.querySelector('#container-album').style.display="none";
  document.querySelector('article.contact-email').style.top='0-1000px';
  document.querySelector('article.contact-email').style.zIndex='-1';

});

document.querySelector('.second').addEventListener('click',function(){
  document.querySelector('.wrap').style.backgroundColor="#171717";
	document.querySelector('#container-album').style.width="100%";
  document.querySelector('#container-album').style.display="block";
  document.querySelector('#container-main').style.width=0;
  document.querySelector('#container-main').style.display="none";
  document.querySelector('article.contact-email').style.top='0-1000px';
  document.querySelector('article.contact-email').style.zIndex='-1';

});

document.querySelector('.third').addEventListener('click',function(){
  document.querySelector('.wrap').style.backgroundColor="#171717";
	document.querySelector('article.contact-email').style.top='0';
  document.querySelector('article.contact-email').style.zIndex='5';

  document.querySelector('#container-main').style.width=0;
  document.querySelector('#container-main').style.display="none";
  document.querySelector('#container-album').style.width=0;
  document.querySelector('#container-album').style.display="none";
});

function close(){
  location.reload();
};

function notice(){
  alert(`현재 홈페이지는 '크롬 브라우저 전용'으로 만들어진 홈페이지입니다.`)
};
//nav --end
