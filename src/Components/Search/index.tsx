import Button from '../Button';
import Input from '../Input';
import Radio from '../Radio';

export default function Profile() {
  return (
    <div>
      <Radio elements={['People', 'Movies']} name="typeSelect" />
      <Input placeholder="Test" />
      <Button>Banana</Button>
    </div>
  );
}
