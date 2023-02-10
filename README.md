# 유기동물을 지켜줘 (스마트 웹앱)
### 소스주소: https://github.com/baboda212/findanimal-api.git
### 배포 : 클라우드타입 (https://web-findanimal-api-1b5xkk2fldo4kz3a.gksl2.cloudtype.app/)
### 앱용파일 제작 완료(apk파일) : https://expo.dev/artifacts/eas/7Nnn4bwncqWFuGDxMvJhM2.apk

1. 제작기간 : 2023.02.01~2023.02.07
2. 사용언어 및 라이브러리 :  HTML, CSS, Javascript, node.js, react, expo

   [![My Skills](https://skillicons.dev/icons?i=html,css,js,nodejs,react,figma&theme=light)](https://skillicons.dev)

3. 주요특징 : 공공 API를 활용한 전국 유기동물 실시간 조회, 페이지 구성 및 총 유기동물 개체수 
4. 사용 API : https://www.data.go.kr/
5. 웹 효과 : SVG animation 효과 활용/ 그라데이션배경 효과 활용

  ![image](https://user-images.githubusercontent.com/113665619/217969065-c225c47e-9fe6-469b-a88d-3326fa4192af.png)

6. 추가 수정 보완작업 진행(2023.02.08~)

- header (nav) 수정(css수정)

    .nav{
      width: 100%;
     /*  background:linear-gradient(#dbe9f6,transparent), 
        linear-gradient(-45deg,#fefcc9,transparent), 
        linear-gradient(45deg,#f7d0d5,transparent); 
      background-blend-mode: sreen;  */
      background: #f7d0d5;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 8px 13px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      text-align: center;
      padding: 20px;
    }
    .nav .gnb{
      max-width: 1220px;
    }
    .nav .gnb img{
      margin-bottom: 0;
    }
    .nav a{
      color: #71787d;
      text-decoration: none;
      margin-left: 40px;
      font-weight: bold;
      font-size: 24px;
    }
    .nav a:nth-child(2){
      margin-left: 10px;
    }
    .nav a:nth-child(4){
      margin-right: 10px;
    }
    .nav a:hover{
      color: #000;
    }

    @media (max-width:375px){
      .nav a{
        font-size: 17px;
      } 
      .nav .gnb img{
        display: none;
      }
    }
    @media (max-width:414px){
      .nav a{
        font-size: 17px;
      } 
      .nav .gnb img{
        display: none;
      }
    }

- 전체적인 메인 폰트 색상 교체

    .color: #71787d;
    .color: #9885d7;
    .color: #9d5cbb;

- vscode상 warning 체크 - create-react-app으로 생성한 프로젝트로 인하여 빌드시 메모리 부족현상 발생

    .env파일 생성 후 GENERATE_SOURCEMAP=false 설정
    
- api자료의 총 갯수와 페이지 설정

    .<p>Page: {pageNo} / {maxPages}</p>
          <p>{totalCount}건 등록</p>
          <div className='btngroup'>
            <button className='btnNext' onClick={prevPage}>이전 페이지</button>
            <button className='btnNext' onClick={nextPage}>다음 페이지</button>
          </div>
          
      <css> 
    .about .btngroup .btnNext{
      padding: 5px;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 15px;
      font-family: 'Gamja Flower';
    }
    .about .btngroup .btnNext:first-child{
      margin-right: 20px;
    }
    .about .btngroup .btnNext:hover{
      background-color: #71787d;
      color: #fff;
    }

- create-react-app 으로 빌드하면서 생긴 불필요한 사진파일 및 소스 제거

- 모바일용 사이즈 수정: 각 모바일 기기에 맞춘 사이즈 추가 및 수정

    .@media (max-width:414px){
      .nav a{
        font-size: 17px;
      } 
      .nav .gnb img{
        display: none;
      }
    }
   

- 모바일 상 유기동물 정보 display수정

     .@media (max-width:414px){
      .about h1{
        font-size: 3rem;
      } 
      .about .itemList{
        display: flex;
        flex-direction: column;
      }
      .about .itemList img{
        width: 100%;
      }
      .about .itemList .text{
        /* outline: 1px solid red; */
        width: 100%;
      }
    }

- manifest.json파일 수정

    {
      "short_name": "유기동물을 지켜줘",
      "name": "Create React App Sample",
      "icons": [
        {
          "src": "favicon.ico",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
        },
        {
          "src": "icon.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "icon.png",
          "type": "image/png",
          "sizes": "512x512"
        }
      ],
      "start_url": ".",
      "display": "standalone",
      "theme_color": "#000000",
      "background_color": "#ffffff"
    }

- apk앱 구동 시 발생하는 api정보 미출력 해결

    index.html 파일에  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 

- SEO설정완료
