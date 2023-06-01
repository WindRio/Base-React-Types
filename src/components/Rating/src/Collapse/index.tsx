import React, { useEffect, useState } from "react";
import { Button, Card, Collapse } from "antd";
import RadioComponent from "../radio";
import { questionGroup } from "../mockup";

export default function CollapseComponent() {
  interface GrQuestionResult {
    id: string;
    question: {
      id: string;
      idAnswer: string;
    }[];
  }

  const [GrQuestionResult, setGrQuestionResult] = useState<GrQuestionResult[]>(
    []
  );

  interface ValueRating {
    idResult: string;
    questionId: string;
    GrId: string;
  }

  const handleRating = (value: ValueRating) => {
    const newGrQuestionResult = {
      id: value.GrId,
      question: [
        {
          id: value.questionId,
          idAnswer: value.idResult,
        },
      ],
    };
    if (GrQuestionResult) {
      const findGrQuestionResult = GrQuestionResult.find(
        (item) => item.id === value.GrId
      );
      if (findGrQuestionResult) {
        const grQuestionIdx = GrQuestionResult.indexOf(findGrQuestionResult);
        const questionArr = GrQuestionResult[grQuestionIdx].question;

        const findQuestionResult = questionArr.find(
          (item) => item.id === value.questionId
        );
        if (findQuestionResult) {
          const questionIdx = questionArr.indexOf(findQuestionResult);
          questionArr[questionIdx].idAnswer = value.idResult;
          setGrQuestionResult(GrQuestionResult);
        } else {
          questionArr.push({
            id: value.questionId,
            idAnswer: value.idResult,
          });
          setGrQuestionResult(GrQuestionResult);
        }
      } else {
        const newResult = [...GrQuestionResult, newGrQuestionResult];
        setGrQuestionResult(newResult);
      }
    } else {
      setGrQuestionResult([
        {
          id: value.GrId,
          question: [
            {
              id: value.questionId,
              idAnswer: value.idResult,
            },
          ],
        },
      ]);
    }
  };
  useEffect(() => {
    // console.log(GrQuestionResult);
  }, [GrQuestionResult]);

  const PanelItem = questionGroup.map((panel) => (
    <Collapse.Panel header={panel.name} key={panel.id}>
      {panel.question.map((itemQuestion) => (
        <Card
          title={itemQuestion.name}
          key={itemQuestion.id}
          style={{ marginTop: "1%" }}
        >
          <RadioComponent
            data={itemQuestion.answer}
            onRating={(idResult: string) =>
              handleRating({
                idResult,
                questionId: itemQuestion.id,
                GrId: panel.id,
              })
            }
          />
        </Card>
      ))}
    </Collapse.Panel>
  ));

  return (
    <Card className="card-collapse" 
     actions={[
      // <Button key="goBack">{t("common.back")}</Button>,
      <Button key="complete">Lưu đánh giá</Button>,
    ]}>
      <Collapse className="collapse-container" defaultActiveKey={["1"]}>
        {PanelItem}
      </Collapse>
    </Card>
  );
}
