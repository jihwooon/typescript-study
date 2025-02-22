import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`what's your mentor's name?`);
    const current = prompt(`what's your mentor's name?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return {...mentor, name: current}
        }
        return mentor
      })
    }));
  };

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter(m => m.name !== name)
    }));
  };

  const handleAdd = () => {
    const name = prompt(`누구를 추가하고 싶은가요?`);
    const title = prompt(`어떤 직책인가요?`);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }]
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentors.name} </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>
        멘토 이름 바꾸기
      </button>
      <button onClick={handleDelete}>
        멘토 삭제하기
      </button>
      <button onClick={handleAdd}>
        멘토 추가하기
      </button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
    {
      name: '존',
      title: '주니어개발자',
    },
  ],
}
