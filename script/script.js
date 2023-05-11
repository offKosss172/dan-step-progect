const servicesWeb = document.getElementById('servicesWeb');
const servicesGraphic = document.getElementById('servicesGraphic');
const servicesSupport = document.getElementById('servicesSupport');
const servicesApp = document.getElementById('servicesApp');
const servicesMarketing = document.getElementById('servicesMarketing');
const servicesSeo = document.getElementById('servicesSeo');


const serviceImg = document.querySelector('.our-services-contant div span img');
const serviceText = document.querySelector('.our-services-contant div p');

servicesWeb.addEventListener('click', () => {
    serviceImg.setAttribute('src', 'img/section/WebDesign.png');
    serviceText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
});

servicesGraphic.addEventListener('click', () => {
    serviceImg.setAttribute('src', 'img/section/graphicdesign.jpg');
    serviceText.innerText = 'Our graphic design services cover a wide range of products – brochures, business cards, publications, mailers, posters and billboards – weve pretty much designed it all. With nearly 20 years of experience designing for print and the web, well help your business convert potential clients into paying customers with well designed, printed collateral.Some common projects we have worked on include:Brochures, rack cards & bookletsBusiness cards, letterhead & envelopesLogos and branded elementsPosters, banners and signageSocial media graphics & digital marketing adsEmail marketing graphics well help your business convert potential clients into paying customers with well designed, printed collateral.Some common projects we have worked on include:Brochures, well help your business convert potential clients into paying customers with well designed';
});

servicesSupport.addEventListener('click', () => {
    serviceImg.setAttribute('src', 'img/section/onlinesupport.jpg');
    serviceText.innerText = 'In the Zendesk customer experience (CX) trends report, 60% of people said they wanted the option of multiple service channels to choose from. It’s no longer good enough to provide a support phone number and email address alone. People want and expect the ability to contact you via the channel of their choice. And in a Zendesk survey on the business impact of customer service, 24% of respondents said text messaging was their preferred channel for support. 27% said any time they weren’t able to use the channel of their choice, it caused a bad customer experience. Even if the portion of customers that prefer SMS above all other options is in the minority, they expect you to be there and will be disappointed if you’re not. For some business models, real-time updates are essential. For same-day orders, such as with food delivery services, such as with food delivery services, such as ';
});

servicesApp.addEventListener('click', () => {
    serviceImg.setAttribute('src', 'img/section/appdesign.png');
    serviceText.innerText = 'Our App Design service is all about creating user-friendly, visually appealing, and functional mobile applications that meet your business needs. Our team of experienced designers and developers work closely with you to understand your requirements and goals for the app, and then craft a design thats tailored to your unique needs. Whether youre looking to build a new app from scratch or redesign an existing one, we have the skills and expertise to deliver exceptional results. We start by conducting thorough research into your target audience, competitor apps, and industry trends to gain a deep understanding of your market. This helps us create a user-friendly and intuitive app interface that appeals to your target audience. We also pay special attention to the apps usability, ensuring that its easy to navigate and use, regardless of the users level of technical expertise.';
});

servicesMarketing.addEventListener('click', () => {
    serviceImg.setAttribute('src', 'img/section/onlinemarketing.png');
    serviceText.innerText = 'Marketing is an essential component of any business, big or small. It involves a variety of strategies and techniques aimed at promoting products or services, generating leads, and ultimately increasing sales. Effective marketing can help businesses gain a competitive edge in the market, reach a wider audience, and establish a strong brand identity. One of the key aspects of marketing is identifying and understanding the target audience. A business needs to know who its customers are, what they want, and how they behave. This information can then be used to create tailored marketing campaigns that resonate with the target audience and drive engagement. Marketing can take many forms, including advertising, public relations, content marketing, email marketing, and social media marketing. Marketing can take many forms ncluding advertising, public relations';
});

servicesSeo.addEventListener('click', () => {
    serviceImg.setAttribute('src', 'img/section/seoservices.jpg');
    serviceText.innerText = 'SEO is a critical component of any successful online marketing strategy. With more and more businesses vying for visibility online, its more important than ever to optimize your website for search engines. SEO involves a variety of techniques, such as keyword research, on-page optimization, link building, and content creation, all aimed at improving your websites ranking on search engine results pages. Keyword research involves identifying the words and phrases that potential customers are searching for in relation to your business. By incorporating these keywords into your websites content, you can increase your chances of ranking higher in search results. On-page optimization includes elements such as title tags, meta descriptions';
});






const allLink = document.getElementById('AmazingAll');
const graphicLink = document.getElementById('AmazingGraphic');
const webLink = document.getElementById('AmazingWeb');
const landingLink = document.getElementById('AmazingLanding');
const wpLink = document.getElementById('AmazingWp');

const allPhotos = document.querySelectorAll('.amazing-work-foto-allblock .image-wrapper');
const fotoGraphic = document.querySelectorAll('.foto-first-graphic');
const fotoWeb = document.querySelectorAll('.foto-first-web');
const fotoLanding = document.querySelectorAll('.foto-first-landing');
const fotoWp = document.querySelectorAll('.foto-first-wordpress');

allLink.addEventListener('click', () => {
  allPhotos.forEach(element => {
    element.style.display = 'block';
  });;
});
graphicLink.addEventListener('click', () => {
 
  fotoGraphic.forEach(element => {
    element.style.display = 'block';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'none';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'none';
  });;

});
webLink.addEventListener('click', () => {
  fotoGraphic.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'block';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'none';
  });;

});
landingLink.addEventListener('click', () => {
 
  fotoGraphic.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'none';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'block';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'none';
  });;

});
wpLink.addEventListener('click', () => {
 
  fotoGraphic.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'none';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'block';
  });;

});






const btnAmazing = document.getElementById('amazingImagesBtn');
const amazingFotoBlock = document.querySelectorAll('.image-wrapper-secret');

btnAmazing.addEventListener('click', () => {
 
  btnAmazing.style.display = 'none';
 
  amazingFotoBlock.forEach(element => {
    element.style.display = 'block';
  });;

});





const btnGallery = document.getElementById('blockImagesBtn');
const galleryFoto = document.querySelectorAll('.gallery-block-images-secret');

btnGallery.addEventListener('click', () => {
 
  btnGallery.style.display = 'none';
  galleryFoto.forEach(element => {
    element.style.display = 'block';
  });;

});

// let slider = $(".slider");
// let images = $('ul.sliderSmallImg > li > img');
// let sliderPicture = $(".sliderImg > img");

// images.on("click", function(event) {
//   let elemClick = $(event.target).parent("li");
//   $(".sliderSmallImg > li.active").removeClass("active");

//   if (!elemClick.length) {
//     elemClick = $(event.target).parent("li");
//     elemClick.addClass("active");
//   } else {
//     elemClick.addClass("active");
//   }

//   // изменить имя и текст в соответствии с текущей картинкой
//   let currentName = $(".sliderSmallImg > li.active").find("img").attr("alt");
//   let currentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
//   $(".slider-content > h6").text(currentName);
//   $(".slider-content > p").text(currentText);
  
//   sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
// });

// $("#prev").on("click", function() {
//   let activeImg = $(".sliderSmallImg > li.active");

//   if (activeImg.is(":first-child")) {
//     activeImg.removeClass("active");
//     $(".sliderSmallImg > li:last-child").addClass("active");
//   } else {
//     activeImg.removeClass("active").prev().addClass("active");
//   }

//   // изменить имя и текст в соответствии с текущей картинкой
//   let currentName = $(".sliderSmallImg > li.active").find("img").attr("alt");
//   let currentText = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//   $(".slider-content > h6").text(currentName);
//   $(".slider-content > p").text(currentText);
  
//   sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
// });

// $("#next").on("click", function() {
//   let activeImg = $(".sliderSmallImg > li.active");

//   if (activeImg.is(":last-child")) {
//     activeImg.removeClass("active");
//     $(".sliderSmallImg > li:first-child").addClass("active");
//   } else {
//     activeImg.removeClass("active").next().addClass("active");
//   }

//   // изменить имя и текст в соответствии с текущей картинкой
//   let currentName = $(".sliderSmallImg > li.active").find("img").attr("alt");
//   let currentText = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
//   $(".slider-content > h6").text(currentName);
//   $(".slider-content > p").text(currentText);
  
//   sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
// });



let slider = $(".slider");
let images = $('ul.sliderSmallImg > li > img');
let sliderPicture = $(".sliderImg > img");
let sliderContent = $(".slider-content");

images.on("click", function(event) {
  let elemClick = $(event.target).parent("li");
  $(".sliderSmallImg > li.active").removeClass("active");

  if (!elemClick.length) {
    elemClick = $(event.target).parent("li");
    elemClick.addClass("active");
  } else {
    elemClick.addClass("active");
  }

  sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
  updateSliderContent();
});

$("#prev").on("click", function() {
  let activeImg = $(".sliderSmallImg > li.active");

  if (activeImg.is(":first-child")) {
    activeImg.removeClass("active");
    $(".sliderSmallImg > li:last-child").addClass("active");
  } else {
    activeImg.removeClass("active").prev().addClass("active");
  }

  sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
  updateSliderContent();
});

$("#next").on("click", function() {
  let activeImg = $(".sliderSmallImg > li.active");

  if (activeImg.is(":last-child")) {
    activeImg.removeClass("active");
    $(".sliderSmallImg > li:first-child").addClass("active");
  } else {
    activeImg.removeClass("active").next().addClass("active");
  }

  sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
  updateSliderContent();
});

function updateSliderContent() {
  let activeImg = $(".sliderSmallImg > li.active");
  let name, text;

  switch (activeImg.attr("id")) {
    case "sliderSmallImg1":
      name = "Hasan Ali";
      text = "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.";
      break;
    case "sliderSmallImg2":
      name = "Lily Mavy";
      text = "Fusce efficitur, justo et dapibus consectetur, ipsum urna pharetra libero, vel molestie tellus risus vel erat. Curabitur id enim gravida, luctus nunc quis, fringilla velit. In et nisl sed velit lobortis placerat.";
      break;
    case "sliderSmallImg3":
      name = "Nastya Scotty";
      text = "Mauris malesuada ultrices risus, a luctus lorem iaculis vel. Suspendisse finibus dolor a lorem mollis, quis tincidunt arcu euismod. Curabitur sed urna purus. Quisque eu nulla metus.Aliquam erat volutpat. Nulla a massa varius, faucibus justo vel, gravida enim.";
      break;
    case "sliderSmallImg4":
      name = "Alisa Kosss";
      text = "Aliquam erat volutpat. Sed id hendrerit ipsum, at bibendum nisl. Curabitur rutrum leo vitae lacus auctor, vel commodo nisi accumsan. Aenean mattis ipsum at dolor euismod, ac suscipit orci facilisis.";
      break;
    case "sliderSmallImg5":
      name = "Freddy Merckury";
      text = "Vivamus venenatis consequat felis, vel consectetur velit lacinia nec. Nulla non luctus nisl. Nunc vel odio id dolor tempor interdum eget sit amet tortor. Praesent malesuada risus ut suscipit lacinia.";
      break;
    case "sliderSmallImg6":
      name = "Elvira Sexy";
      text = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae mi sed augue tincidunt consectetur. Aenean suscipit, lacus quis blandit venenatis, odio orci blandit mi, eu laoreet metus lacus sed elit.";
      break;
  }

  sliderContent.find("h6").text(name);
  sliderContent.find("p").text(text);
}
