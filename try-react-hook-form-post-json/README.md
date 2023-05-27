# with-react-hook-form-post-json

react-hook-form の [v.7.44.0](https://github.com/react-hook-form/react-hook-form/releases/tag/v7.44.0) で導入された `<Form />`コンポーネントを利用して、`fetch`を使わずに JSON を POST する実装を試した。  
配列に内包したオブジェクトを POST するような複雑なものも問題なく POST できる。  
react-hook-form に form の実装が依存してしまうが、それを許容できるなら標準の HTML セマンティクスに近く、扱いやすいのではと感じる。

`fieldArray`を使うパターンや、MUI と組み合わせるときの`Controller`を使用した実装は要調査。
