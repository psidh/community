import MythCards from './components/MythComponent';
import EpicCards from './components/EpicComponent';
import Logo from './components/Logo';
export default function Home() {
  return (
    <div>
      <Logo />
      <MythCards />
      <EpicCards />
    </div>
  );
}
