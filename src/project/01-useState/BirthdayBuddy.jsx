import { useState } from 'react';
import { birthdayPeople } from '../../data';

const BirthdayBuddy = () => {
  const [people, setPeople] = useState(birthdayPeople);

  return (
    <main>
      <section>
        <h3>{people.length} birthdays today</h3>
      </section>
      <section>
        {people.map((person) => {
          const { id, name, age, image } = person;

          return (
            <div key={id}>
              <img src={image} alt={name}></img>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
          );
        })}

        <button type="button" onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};
export default BirthdayBuddy;
