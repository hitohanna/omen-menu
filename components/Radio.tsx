type Props = { name: string };

const Radio = ({ props }: { props: Props[] }) => {
  return (
    <>
      {props.map((prop, i) => (
        <div className="flex" key={i}>
          <input
            type="radio"
            className="hidden peer"
            name="radio"
            id={i.toString()}
          />
          <label
            htmlFor={i.toString()}
            className="myborder-putih px-2 py-1 text-sm cursor-pointer peer-checked:bg-kuning"
          >
            {prop.name}
          </label>
        </div>
      ))}
    </>
  );
};

export default Radio;
