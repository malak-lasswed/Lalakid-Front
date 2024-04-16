import useSound from 'use-sound';
const ButtonPlaySound = (props) => {
      console.log(props.soundlink);
      const [play] = useSound(props.soundlink);
      return (<button onClick={play} className='btn btn-success' ><i class="bi bi-volume-up-fill"></i> Listen</button>);
};
export default ButtonPlaySound;