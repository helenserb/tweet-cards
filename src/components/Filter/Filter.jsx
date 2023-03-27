import { nanoid } from 'nanoid';

export const Filter = ({value, onChange}) => {
    const filterId = nanoid();
  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name:</label>
          <input id={filterId} type="text"  onChange={onChange} name = "filter"/>
    </div>
  );
};
