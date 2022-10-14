"use strict";
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 7102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ ProfileImageContainer),
/* harmony export */   "o": () => (/* binding */ AboutContent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AboutContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "about__AboutContent",
  componentId: "sc-1qkvq2p-0"
})(["width:98%;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:20px;.about-content{h3{color:", ";}p{margin-top:15px;font-size:1em;line-height:32px;color:", ";}}"], props => props.theme.colors.subtitle, props => props.theme.colors.textContent);
const ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "about__ProfileImageContainer",
  componentId: "sc-1qkvq2p-1"
})(["display:flex;justify-content:center;align-items:center;align-self:center;width:150px;height:150px;margin-top:20px;border-radius:100%;border:1px solid ", ";-webkit-box-shadow:0 0 10px 0 ", ";-moz-box-shadow:0 0 10px 0 ", ";box-shadow:0 0 10px 0 ", ";overflow:hidden;"], props => props.theme.colors.borderBox, props => props.theme.colors.boxShadow, props => props.theme.colors.boxShadow, props => props.theme.colors.boxShadow);

/***/ }),

/***/ 9947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B8": () => (/* binding */ IconsContent),
/* harmony export */   "Lr": () => (/* binding */ IconsContainer),
/* harmony export */   "N5": () => (/* binding */ ContactContent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContactContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "contact__ContactContent",
  componentId: "sc-5vq7l3-0"
})(["width:98%;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:20px;.contact-content{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;width:100%;h3{color:", ";}p{margin-top:15px;font-size:1em;line-height:32px;color:", ";}}"], props => props.theme.colors.subtitle, props => props.theme.colors.textContent);
const IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "contact__IconsContainer",
  componentId: "sc-5vq7l3-1"
})(["width:85%;display:flex;align-items:center;justify-content:space-evenly;margin-top:30px;"]);
const IconsContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "contact__IconsContent",
  componentId: "sc-5vq7l3-2"
})(["display:flex;justify-content:center;align-items:center;width:80px;height:80px;"]);

/***/ }),

/***/ 1725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PJ": () => (/* reexport */ Icons),
  "tz": () => (/* reexport */ Layout),
  "v2": () => (/* reexport */ components_Menu),
  "m1": () => (/* reexport */ ProfileImage)
});

// UNUSED EXPORTS: Footer, Header

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/assets/styles/global.ts
var global = __webpack_require__(766);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx









const HeaderComponent = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Header */.h4, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "logoTitleLink",
        children: [/*#__PURE__*/jsx_runtime_.jsx(ProfileImage, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "titlePage",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "<Jorge Gomes />"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Menu, {})]
  });
};

/* harmony default export */ const Header = (HeaderComponent);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx




const FooterComponent = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(global/* Footer */.$_, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "footer-container",
      children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "\xA9Jorge Luiz Gomes - 2022 - Todos os direitos reservados."
      })
    })
  });
};

/* harmony default export */ const Footer = (FooterComponent);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/Layout/index.tsx








const MainContainer = ({
  titlePage,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Main */.or, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: titlePage
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Container */.W2, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(global/* Content */.VY, {
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })]
  });
};

/* harmony default export */ const Layout = (MainContainer);
;// CONCATENATED MODULE: ./src/components/Menu/index.tsx






const Menu = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "menu",
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: router.pathname === '/' ? 'active' : '',
        children: "About Me"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/projects",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: router.pathname === '/projects' ? 'active' : '',
        children: "Projects"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/blog",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: router.pathname === '/blog' ? 'active' : '',
        children: "Blog"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/contact",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: router.pathname === '/contact' ? 'active' : '',
        children: "Contact"
      })
    })]
  });
};

/* harmony default export */ const components_Menu = (Menu);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/me.jpg
/* harmony default export */ const me = ({"src":"/jluizgomes.github.io//_next/static/media/me.06f9f9c2.jpg","height":500,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAI0S/wD/xAAcEAACAgIDAAAAAAAAAAAAAAACBAEDAAYRQlH/2gAIAQEAAT8AXqoc1lkAESZqYEpjvPM+Z//EABcRAQADAAAAAAAAAAAAAAAAAAIAMXL/2gAIAQIBAT8ANvU//8QAGREAAQUAAAAAAAAAAAAAAAAAAAECERJx/9oACAEDAQE/AHLFcP/Z","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/assets/styles/pages/about.ts
var about = __webpack_require__(7102);
;// CONCATENATED MODULE: ./src/components/ProfileImage/index.tsx






const ProfileImage = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(about/* ProfileImageContainer */.G, {
    children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
      alt: "Jorge Gomes",
      src: me,
      placeholder: "blur"
    })
  });
};


;// CONCATENATED MODULE: ./src/assets/images/linkedin.png
/* harmony default export */ const linkedin = ({"src":"/jluizgomes.github.io//_next/static/media/linkedin.80aba7be.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42h3MTUrDUBRA4XNfX0oRm6qQRiziUJ1Gd+ES3IErUNyBrsSBwy5BdGBLQZwKOpGqmErS/DUv19DZGRw+Ca/Gk3laRyxr7Q97kikY0JWqIDI186SOrqOAu/NjSUpHX8CBbBsB1ciQOz3a8zk9DKFsWFQNjVPiwjEwopaOSJxWfMUZTxcn7A99up7l9n7GzexHDJUj3OoxCvochAMeXz/5SwvOohEth0FRI4LtGKw1vHwsSLKKjZ4HTtXie/L89suyrNtJeI9zHlqlWDWw0xUJLseT79xFFE5RhE3LugXZ9b3pP46VZbNqVBlZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/github.png
/* harmony default export */ const github = ({"src":"/jluizgomes.github.io//_next/static/media/github.7e645f62.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAV0lEQVR42kXBoQ3CUBgGwCMkhBAIhkERDEDQyMo3TGW7AhMgWl3VfP1d72hi34jZaKqjWYge90ovxBuHykeIDsfKV1gNXs5OnhYhBp2bh6g08XNx9RdtAxE2J2vllBUEAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/twitter.png
/* harmony default export */ const twitter = ({"src":"/jluizgomes.github.io//_next/static/media/twitter.52d16d46.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEUDqfQDqfMDqPQDqPMDqfMDqfQDqPQDqfQDqPQDqfQDqfQDqfMDqfMDqfMDqfQDqPQDqfQDqfQDqfQDqfQDqPQDqPQDqfQDqPQDqfQDqfMDqfQDqPMDqPQDqfQDqPQDqfQDqfQDqfQDqfQDqfQDqPQDqPMDqfMDqPMDqfQDqPQDqPMXQ0YZAAAAKHRSTlMAAAAAAQMDBwgODxwkLzA1Oz9FSldiZYGCg5mbur7L4u/0+fr6/P7+0d//awAAAEVJREFUeNoFQIURgDAMfBrcilPcIc3+A3JwEFBYRS56Dcy8DRjZtPJxAyMijxwJ0l3ukxcF1V2WOQOK6bWrhoe4rHMiX/3GZAV8F7Ha2wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/assets/styles/pages/contact.ts
var contact = __webpack_require__(9947);
;// CONCATENATED MODULE: ./src/components/Icons/index.tsx










const Icons = ({
  name
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(contact/* IconsContent */.B8, {
    children: [name === 'linkedin' && /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "https://www.linkedin.com/in/jluizgomes/",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          alt: "Jorge Gomes at LinkedIn",
          src: linkedin,
          placeholder: "blur"
        })
      })
    }), name === 'github' && /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "https://github.com/jluizgomes",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          alt: "Jorge Gomes at GitHub",
          src: github,
          placeholder: "blur"
        })
      })
    }), name === 'twitter' && /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "https://twitter.com/jluizgomes",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          alt: "Jorge Gomes at Twitter",
          src: twitter,
          placeholder: "blur"
        })
      })
    })]
  });
};


;// CONCATENATED MODULE: ./src/components/index.ts








/***/ }),

/***/ 1209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useMounted() {
  const {
    0: mounted,
    1: setMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setMounted(true), []);
  return mounted;
}



/***/ })

};
;