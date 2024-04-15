import './App.css'

export const BreedsSelect = (props) => {
  const {breeds, selectedBreed, onChangeBreed} = props;
  return (
    <>
      <p>Breeds List</p>
      <select value={selectedBreed} placeholder='Select' onChange={onChangeBreed}>
        {Object.keys(breeds).map((breed) => 
          <option key={breed} value={breed}>{breed}</option>
        )}
      </select>
    </>
  )
}

export default BreedsSelect
