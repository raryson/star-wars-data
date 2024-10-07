import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';
import { getPeopleById } from '../Services/People';

export default function PeopleDetails() {
  let response;
  const { name } = useParams();
  useEffect(() => {
    // response = async () => await getPeopleById(id as string);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10">
        <Card>
          <h1>{name}</h1>
        </Card>
      </div>
    </div>
  );
}
