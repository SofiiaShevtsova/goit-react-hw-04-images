import StyleList from 'styles/styles';

const { IsEmptyList } = StyleList;

const EmptyList = props => {
  return (
    <IsEmptyList>
      <p>"We are waiting for your choice..."</p>
    </IsEmptyList>
  );
};

export default EmptyList;
