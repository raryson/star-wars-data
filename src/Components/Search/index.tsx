import Button from '../Button';
import Input from '../Input';
import Radio from '../Radio';
import Card from '../Card';

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10">
        <div className="col-span-4 mr-8">
          <Card>
            <Radio elements={['People', 'Movies']} name="typeSelect" />
            <Input placeholder="Test" />
            <Button>Banana</Button>
          </Card>
        </div>
        <div className="col-span-6">
          <Card>
            <Radio elements={['People', 'Movies']} name="typeSelect" />
            <Input placeholder="Test" />
            <Button>Banana</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
