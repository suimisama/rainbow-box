import { Button, Flex } from 'antd';

function ShowColor({ color }) {
  const styles = {
    color,
  };
  return (
    <div>
      <div className=" mb-5" style={styles}>
        <span className="text-sm">对它使用炎拳吧！</span>
        <span className="text-md">对它使用炎拳吧！</span>
        <span className="text-xl">对它使用炎拳吧！</span>
        <span className="text-2xl">对它使用炎拳吧！</span>
        <span className="text-3xl">对它使用炎拳吧！</span>
        <span className="text-4xl">对它使用炎拳吧！</span>
      </div>
      <div className=" mb-5" style={styles}>
        <span className="text-sm font-semibold">对它使用炎拳吧！</span>
        <span className="text-md font-semibold">对它使用炎拳吧！</span>
        <span className="text-xl font-semibold">对它使用炎拳吧！</span>
        <span className="text-2xl font-semibold">对它使用炎拳吧！</span>
        <span className="text-3xl font-semibold">对它使用炎拳吧！</span>
        <span className="text-4xl font-semibold">对它使用炎拳吧！</span>
      </div>
      <Flex wrap="wrap" gap="small">
        <Button type="primary" style={{ backgroundColor: color }}>
          Primary
        </Button>
        <Button style={{ borderColor: color, color }}>Default</Button>
        <Button type="dashed" style={{ borderColor: color, color }}>
          Dashed
        </Button>
      </Flex>
    </div>
  );
}

export default ShowColor;
