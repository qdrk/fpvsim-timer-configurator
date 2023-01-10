import { registerEnumType } from 'type-graphql';

enum DeviceType {
  ExpressLRS = 'ExpressLRS',
}

registerEnumType(DeviceType, {
  name: 'DeviceType',
});

export default DeviceType;
