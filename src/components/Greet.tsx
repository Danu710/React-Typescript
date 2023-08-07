type GreetProps = {
  name: string;
  messageCount?: number; //optional use ?:
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? ` Hai ${props.name} age : ${messageCount}`
          : `Welcome Guest`}
      </h1>
    </div>
  );
};
