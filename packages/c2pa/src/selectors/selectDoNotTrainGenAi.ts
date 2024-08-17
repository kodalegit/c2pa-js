import { Manifest, Assertion } from 'c2pa';

export interface TrainingMiningMap {
  [key: string]: {
    use: 'allowed' | 'notAllowed' | 'constrained';
    constraint_info?: string;
  };
}

export interface TrainingMiningAssertion
  extends Assertion<'c2pa.training-mining', { entries: TrainingMiningMap }> {}

export function selectDoNotTrainGenAi(manifest: Manifest) {
  const trainingMining = manifest.assertions.data.find(
    (assertion): assertion is TrainingMiningAssertion =>
      assertion.label === 'c2pa.training-mining',
  );

  const genAiTrainingAssertion =
    trainingMining?.data.entries['c2pa.ai_generative_training'];
  return genAiTrainingAssertion;
}
