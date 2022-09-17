<div align="center">
<br>

# <b>OSULLOC</b>

<br>

## <b>오설록 사이트 클론코딩</b>

https://osulloc.vercel.app <br>
https://www.youtube.com/watch?v=qCpXsTa6xEY

<br>

## 📆 프로젝트 기간

2022년 9월 9일 ~ 2022년 9월 15일 (총 7일)

<br>

## 💻 &nbsp; <b>github</b> &nbsp; 💻

| [Front-end](https://github.com/k-gardn/osulloc_FE) |
[Back-end](https://github.com/Jeeyeonn/innovation_clone_2_BE) |
<br>
<br>

<br>

## 👩🏻‍💻 <b>Contributors</b> 🧑🏻‍💻

<br>

| [김정원](https://github.com/k-gardn) | [문이슬](https://github.com/Leeseul-Moon) | [차혜인](https://github.com/hyeincha) | [박지연](https://github.com/Jeeyeonn) | [전선향](https://github.com/petal416) |
| :----------------------------------: | :---------------------------------------: | :-----------------------------------: | :-----------------------------------: | :-----------------------------------: |
|                  FE                  |                    FE                     |                  FE                   |                  BE                   |                  BE                   |
|              상세페이지              |                메인페이지                 |                로그인                 |            전체상품페이지             |                로그인                 |
|               장바구니               |              전체상품페이지               |               회원가입                |              상세페이지               |               회원가입                |
|                                      |                                           |                                       |               장바구니                |              메인페이지               |

<br>

## ⚙️ <b>Tech Stack</b> 🛠

<br>

<img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/Java-green?style=flat-square&logo=java&logoColor=white"/> <img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/Spring-green?style=flat-square&logo=Spring&logoColor=white"/> <img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/javascript-yellow?style=flat-square&logo=javascript&logoColor=white"/> <img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/> <img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/Redux-purple?style=flat-square&logo=Redux&logoColor=white"/> <img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/AWS-232f3e?style=flat-square&logo=amazon&logoColor=white"/>
<img style="margin:5px; border: 2px solid white; border-radius: 20px" src="https://img.shields.io/badge/vercel-black?style=flat-square&logo=vercel&logoColor=white"/> <br /><br />

## 🛼 <b>How to run</b> ⛸ </div>

## Back-End

#### clone repository

```shell
$ git clone https://github.com/Jeeyeonn/innovation_clone_2_BE
```

#### into the repository

```shell
$ cd innovation_clone_2_BE
```

#### build

```shell
$ ./build gradle
```

#### run server

```shell
$ java -jar build/libs/InnovationCloneBeApplicationTests.jar
```

## Front-end

#### clone repository

```shell
$ git clone https://github.com/k-gardn/osulloc_FE
```

#### into the repository

```shell
$ cd osulloc_FE
```

#### install packages

```shell
$ yarn
```

#### start app

```shell
$ yarn start
```

<br>
<div align="center">

## 📁 Directory Structure 📂 </div>

#### Front-end

```
📦src
 ┣ 📂components
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📜Cart.jsx
 ┃ ┃ ┗ 📜Cart.module.css
 ┃ ┣ 📂cart_item
 ┃ ┃ ┣ 📜CartItem.jsx
 ┃ ┃ ┗ 📜CartItem.module.css
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Header.module.css
 ┃ ┃ ┣ 📜LayoutPage.jsx
 ┃ ┃ ┗ 📜LayoutPage.module.css
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📜Detail.jsx
 ┃ ┃ ┗ 📜Detail.module.css
 ┃ ┣ 📂join
 ┃ ┃ ┣ 📜Join.jsx
 ┃ ┃ ┗ 📜Join.module.css
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜KakaoLogin.jsx
 ┃ ┃ ┣ 📜KakaoRedirect.jsx
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜Login.module.css
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂banner
 ┃ ┃ ┃ ┣ 📜Banner.jsx
 ┃ ┃ ┃ ┣ 📜Banner.module.css
 ┃ ┃ ┃ ┗ 📜arrowForward.png
 ┃ ┃ ┣ 📂bestProducts
 ┃ ┃ ┃ ┣ 📜BestProducts.jsx
 ┃ ┃ ┃ ┗ 📜BestProducts.module.css
 ┃ ┃ ┣ 📂eventBanner
 ┃ ┃ ┃ ┣ 📜EventBanner.jsx
 ┃ ┃ ┃ ┗ 📜EventBanner.module.css
 ┃ ┃ ┣ 📂subscription
 ┃ ┃ ┃ ┣ 📜Subscription.jsx
 ┃ ┃ ┃ ┗ 📜Subscription.module.css
 ┃ ┃ ┗ 📂subscriptionItem
 ┃ ┃ ┃ ┣ 📜SubscriptionItem.jsx
 ┃ ┃ ┃ ┗ 📜SubscriptionItem.module.css
 ┃ ┣ 📂productItem
 ┃ ┃ ┣ 📜ProductItem.jsx
 ┃ ┃ ┗ 📜Productitem.module.css
 ┃ ┗ 📂productList
 ┃ ┃ ┣ 📜ProductList.jsx
 ┃ ┃ ┗ 📜ProductList.module.css
 ┣ 📂hooks
 ┃ ┣ 📜useBrowerEvent.jsx
 ┃ ┗ 📜useInput.js
 ┣ 📂network
 ┃ ┗ 📜request.js
 ┣ 📂pages
 ┃ ┣ 📜CartPage.jsx
 ┃ ┣ 📜DetailPage.jsx
 ┃ ┣ 📜MainPage.jsx
 ┃ ┗ 📜ProductListPage.jsx
 ┣ 📂redux
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📜cartSlice.js
 ┃ ┃ ┣ 📜detailSlice.js
 ┃ ┃ ┣ 📜productSlice.js
 ┃ ┃ ┗ 📜usersSlice.js
 ┃ ┗ 📜configStore.js
 ┣ 📂utils
 ┃ ┗ 📜moneyForm.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```

#### Back-end

```
📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂innovation
 ┃ ┃ ┃ ┃ ┗ 📂innovation_clone_be
 ┃ ┃ ┃ ┃ ┃ ┣ 📂Cart
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CartController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CartRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CartResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CartUpdateRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Cart.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CartRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂Service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CartService.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂Error
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂Enum
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ErrorCode.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂Member
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MemberController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TokenDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Member.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RefreshToken.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜RefreshTokenRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MemberService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserDetailsImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserDetailsServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jwt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AccessDeniedHandlerException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AuthenticationEntryPointException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜JwtFilter.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TokenProvider.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂shared
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Authority.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂OAuth
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KakaoService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OAuthController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OAuthResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OauthUserDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserDetailsImpl.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂Product
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Request
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂Response
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductDetailResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Product.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂Service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductService.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CorsConfiguration.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜JwtSecurityConfiguration.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SecurityConfiguration.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mail
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂Service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MailScheduler.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜InnovationCloneBeApplication.java
 ┃ ┗ 📂resources
 ┃ ┃ ┗ 📜Test.http
 ┗ 📂test
 ┃ ┗ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂innovation
 ┃ ┃ ┃ ┃ ┗ 📂innovation_clone_be
 ┃ ┃ ┃ ┃ ┃ ┣ 📂Cart
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂Entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CartTest.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜InnovationCloneBeApplicationTests.java
```

<div align="center">

<br>

## 💾 <b>Database Schema</b> 💿

<br>

![image](<https://postimagestorage.s3.amazonaws.com/innovation_clone+(1).png>) </div>
