// const path = require('path')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),  // 절대경로를 제공해야 한다.
    // filename: 'main.js',
    clean: true  // 기존 내용 제거
  }
}