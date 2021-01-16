function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Massive help from youtuber content creator Ben Brooke Follow like and subscribe to him! : https://www.youtube.com/watch?v=ESSQykjKmuA&ab_channel=BenBrooke -->


const data = [
{ id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
{ id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
{ id: 'bruh', letter: 'E', src: 'https://www.myinstants.com/media/sounds/movie_1.mp3' },
{ id: 'nutt', letter: 'A', src: 'https://www.myinstants.com/media/sounds/nut_ZKo5FA9.mp3' },
{ id: 'oof', letter: 'S', src: 'https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3' },
{ id: 'mission failed', letter: 'D', src: 'https://www.myinstants.com/media/sounds/mission-failed-well-get-em-next-time.mp3' },
{ id: 'discord', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/discord-notification.mp3' },
{ id: 'not like this', letter: 'X', src: 'https://www.myinstants.com/media/sounds/oh-shit-iam-sorry.mp3' },
{ id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav' }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",









    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;

      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeyDown);}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyDown);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("h1", null, this.props.letter), /*#__PURE__*/
      React.createElement("audio", {
        ref: ref => this.audio = ref //reference referes to this specific element audio its referenceing from
        , className: "clip",
        src: this.props.src,
        id: this.props.letter })));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",





    display => this.setState({ display }));this.state = { display: 'Click or Press key' };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { id: "drum-pads" },
      data.map((d) => /*#__PURE__*/
      React.createElement(DrumPad, {
        id: d.id,
        letter: d.letter,
        src: d.src,
        handleDisplay: this.handleDisplay
        // onClick={this.handleClick}
      })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));