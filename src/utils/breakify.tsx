import elements from '../elements';

export const breakify = (text: string) => {
  const capitalizedText: string = `${text.slice(0, 1).toUpperCase()}${text
    .slice(1)
    .toLowerCase()}`;

  const firstTwoIndex: number = elements.indexOf(capitalizedText.slice(0, 2));
  const firstIndex = elements.indexOf(capitalizedText[0]);

  if (firstTwoIndex != -1) {
    return (
      <p className="text">
        <span className="text green-txt">{capitalizedText.slice(0, 2)}</span>
        {capitalizedText.slice(2)}
      </p>
    );
  } else if (firstIndex !== -1) {
    return (
      <p className="text">
        <span className="text green-txt">{capitalizedText[0]}</span>
        {capitalizedText.slice(1)}
      </p>
    );
  } else {
    return <p className="text">{capitalizedText}</p>;
  }
};
