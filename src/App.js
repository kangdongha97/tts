import './App.css';
//import client from 'axios';
import Speech from 'speak-tts';

//2021-12-31 강동하 tts https://openbase.com/js/speak-tts/documentation
const speech = new Speech()
console.log('객체생성');
speech.init({
  'volume': 1,
  'lang': 'ko-KR',
  'rate': 1,
  'pitch': 1,
  'voice':'Google 한국의',
  'splitSentences': true,
  'listeners': {
    'onvoiceschanged': (voices) => {
      console.log("Event voiceschanged", voices)
    }
  }
}).then((data) => {
  // The "data" object contains the list of available voices and the voice synthesis params
  console.log("Speech is ready, voices are available", data)
}).catch(e => {
  console.error("An error occured while initializing : ", e)
})

const App = () => {

  const Speak = () => {
    let speakText = document.getElementById('text');
    speech.speak({
      'text': speakText.value,
    }).then(() => {
      // 왜 안되는지 모르겠네
      console.log("Success !")
    }).catch(e => {
      console.error("An error occurred :", e)
    })
    // 인풋 값 초기화
    speakText.value = null;
  }

  // const onClick = () => {
  //   console.log("전송시작");
  //   client.post('http://date.jsontest.com/')
  //   .then(response => {
  //     console.log("로그인 성공");
  //     console.log(response);
  //     console.log(response.data.time);
  //   })
  //   .catch(response => {
  //     console.log("로그인 실패");
  //   })
  //   alert("전송완료");
  // }
  return (
    <div className="App">
      <h1>Text To Speech</h1>
      {/* <button onClick={onClick}>버튼1</button> */}
      <input type="text" id="text"/>
      <button onClick={Speak}>버튼2</button>
    </div>
  );
}

export default App;
