import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'


const Home = ({ username, setUsername, room, setRoom, socket })=> {
    const navigate = useNavigate();
    const joinRoom = () => {
        if (room !== '' && username !== '') {
          socket.emit('join_room', { username, room });
        }
        navigate('/chat', { replace: true }); 
      };
  
    return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Reach Out`}</h1>
        <input
          className={styles.input}
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)} // Add this
        />
        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)} // Add this
        >
          <option>-- Select Room --</option>
          <option value='JokePage'>Joke Page</option>
          <option value='Mental Health'>Mental Health</option>
          <option value='Connect'>Connect</option>
          <option value='Group Meet'>Group Meet</option>
        </select>

        <button
          className='btn btn-secondary'
          style={{ width: '100%' }}
          onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};
export default Home;