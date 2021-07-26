import { NativeModules } from 'react-native';

type PoseEstimationType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PoseEstimation } = NativeModules;

export default PoseEstimation as PoseEstimationType;
