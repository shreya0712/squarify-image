[![Build Status][build-shield]]()
[![MIT License][license-shield]][license-url]
[![Contributors][contributors-shield]]()
<img src="https://img.badgesize.io/shreya0712/squarify-image/master/build/index.js.gz?style=for-the-badge&compression=gzip&label=gzip+size&max=8000&softmax=4000">
[![LinkedIn][linkedin-shield]][linkedin-url]

  <p align="center"><h2 align="center">Squarify Image</h2></p>

Easy to use image component where the image takes up entire height and width of the containing element, while maintaining its aspect ratio by filling up extra space with blurred background.

<div align="center">
<img src="https://user-images.githubusercontent.com/47115189/73382430-7f618000-42ed-11ea-8286-d256b2afa4e1.png" height="100px" width="100px">
</div>

## Getting Started

### Prerequisites

Following Peer Dependency is required for using this library:

- <b>react</b>: ^16.12.0

### Installation

```
npm install @tarragon/squarify-image --save
```

or

```
yarn add @tarragon/squarify-image
```

## Usage

### Example

Checkout the basic usage <a href="https://codesandbox.io/s/quizzical-goldstine-qii4c">here</a>.<br/>

### Quick Usage

<strong>Make sure to use the component within a container element whose dimensions shall be inherited by the image.</strong>

```jsx
<div className="img-container">
  <Squarify image={url} />
</div>
```

Import the <em>Squarify</em> component and pass the href property for the image.

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Emotion](https://emotion.sh/)
- ❤️

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=for-the-badge
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0077B5
[linkedin-url]: https://www.linkedin.com/in/shreya-tiwari/
[product-screenshot]: https://user-images.githubusercontent.com/4329912/59576904-0d7e5280-90df-11e9-868d-dec257ed1626.png
