import React, { useState } from "react";
import Counter from "./counter";
const CountersList = () => {
  const initialState = [
    { id: 0, value: 1, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Вилка" },
    { id: 2, value: 3, name: "Ложка" },
    { id: 3, value: 4, name: "Тарелка" },
    { id: 4, value: 5, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newArr = counters.slice();
    newArr[id].value += 1;
    setCounters(newArr);
  };
  const handleDecrement = (id) => {
    const newArr = counters.slice();
    newArr[id].value -= 1;
    setCounters(newArr);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
