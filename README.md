# 유기동물을 지켜줘 (스마트 웹앱)
### 배포 : 클라우드타입 (https://web-findanimal-api-1b5xkk2fldo4kz3a.gksl2.cloudtype.app/)
### 앱용파일 제작 완료(apk파일) : https://expo.dev/artifacts/eas/7Nnn4bwncqWFuGDxMvJhM2.apk

1. 제작기간 : 2023.02.01~2023.02.07
2. 사용언어 및 라이브러리 :  HTML, CSS, Javascript, node.js, react, expo

[![My Skills](https://skillicons.dev/icons?i=html,css,js,nodejs,react,figma&theme=light)](https://skillicons.dev)

3. 주요특징 : 공공 API를 활용한 전국 유기동물 실시간 조회
4. 사용 API : https://www.data.go.kr/
5. 웹 효과 : SVG animation 효과 활용/ 그라데이션배경 효과 활용

![image](https://user-images.githubusercontent.com/113665619/217969065-c225c47e-9fe6-469b-a88d-3326fa4192af.png)

6.추가 수정 보완작업 진행(2023.02.08~)

(1) header (nav) 수정

(2) 전체적인 메인 폰트 색상 교체

    .color: #71787d;
    .color: #9885d7;
    .color: #9d5cbb;

(3) vscode상 warning 체크 - create-react-app으로 생성한 프로젝트로 인하여 빌드시 메모리 부족현상 발생

    .env파일 생성 후 GENERATE_SOURCEMAP=false 설정
    
(4) api자료의 총 갯수와 페이지 설정

    .<p>Page: {pageNo} / {maxPages}</p>
          <p>{totalCount}건 등록</p>
          <div className='btngroup'>
            <button className='btnNext' onClick={prevPage}>이전 페이지</button>
            <button className='btnNext' onClick={nextPage}>다음 페이지</button>
          </div>
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

(5) create-react-app 으로 빌드하면서 생긴 불필요한 사진파일 및 소스 제거

(6) 모바일용 사이즈 수정: 각 모바일 기기에 맞춘 사이즈 추가 및 수정

    .@media (max-width:414px){
      .nav a{
        font-size: 17px;
      } 
      .nav .gnb img{
        display: none;
      }
    }
   

(7) 모바일 상 유기동물 정보 display수정

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
