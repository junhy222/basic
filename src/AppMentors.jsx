import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {

  const [person, dispatch] = useReducer(personReducer, initalPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  }

  const handleDeleteMento = () => {
    const name = prompt(`누구의 이름을 지우고 싶으세요?`);
    dispatch({ type: 'deleted', name });
  };

  const handleAddMento = () => {
    const name = prompt(`이름을 알려주세요?`);
    const title = prompt(`직업을 알려주세요`);
    dispatch({ type: 'added', name, title });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleDeleteMento}>멘토 삭제하기</button>
      <button onClick={handleAddMento}>멘토 추가하기</button>
    </div>
  );
}

const initalPerson = {
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
  ],
}
