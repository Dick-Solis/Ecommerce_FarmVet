import styled from "@emotion/styled";


export function StepProgressBar({ steps, currentStep }) {
  return (
    <ProgressBar>
      {steps.map((step, index) => (
        <Step key={index} active={index === currentStep}>
                 {/* {<AiIcons.AiFillHome />} */}
                 {/* {step} */}
          {index <= currentStep && (
            <ProgressLine currentStep={currentStep} totalSteps={steps.length} >
              {step}
            </ProgressLine>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
}
const ProgressBar = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  width: 300px;
  margin: 20px auto;
  gap: 2px;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  font-weight: normal;
  position: relative;
`;
const ProgressLine = styled.div`
  height: 5px;
  background-color: #000; 
  position: absolute;
  width: 100%;
`;
