function SelectOptions() {
  return (
    <div className="w-full">
      <select className=" w-full px-4 py-2 rounded border-gray-300 shadow-sm focus:border-primary  outline-none focus:ring-primary focus:ring-opacity-50 transition-colors duration-300">
        <option value="" disabled selected>
          I am
        </option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="Parent">Parent</option>
        <option value="Personnel">Personnel</option>
      </select>
    </div>
  );
}

export default SelectOptions;
