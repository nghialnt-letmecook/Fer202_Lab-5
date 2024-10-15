import React, { useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is ReactJS?",
      options: [
        "A JavaScript library for building user interfaces",
        "A programming language",
        "A database management system",
      ],
      answer: "A JavaScript library for building user interfaces",
    },
    {
      id: 2,
      question: "What is JSX?",
      options: [
        "A programming language",
        "A file format",
        "A syntax extension for JavaScript",
      ],
      answer: "A syntax extension for JavaScript",
    },
    {
      id: 3,
      question: "What is A?",
      options: [
        "A programming language",
        "A file format",
        "A syntax extension for JavaScript",
      ],
      answer: "A programming language",
    },
    {
      id: 4,
      question: "What is B?",
      options: [
        "A programming language",
        "A file format",
        "A syntax extension for JavaScript",
      ],
      answer: "A file format",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0); // Lưu trữ câu hỏi hiện tại
  const [score, setScore] = useState(0); // Lưu trữ điểm số
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Lưu trữ câu trả lời đã chọn
  const [quizEnd, setQuizEnd] = useState(false); // Kiểm tra xem quiz có kết thúc hay không

  // Kiểm tra và cộng điểm khi chọn câu trả lời
  const handleRadioChange = (event) => {
    // Lấy câu trả lời đã chọn
    const answer = event.target.value;
    // Lấy id câu hỏi
    const questionId = questions[currentQuestion].id;
    
    // Cập nhật câu trả lời đã chọn
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });

    // Kiểm tra nếu câu trả lời là đúng, cộng điểm
    if (answer === questions[currentQuestion].answer) {
      if (!selectedAnswers[questionId]) { // Nếu câu trả lời chưa được chọn trước đó
        setScore(score + 1);
      }
    } else { // Nếu câu trả lời sai
      // Nếu đã trả lời đúng trước đó nhưng thay đổi sai thì trừ điểm
      if (selectedAnswers[questionId] === questions[currentQuestion].answer) { // selectedAnswers[questionId] là câu trả lời đã chọn trước đó, questions[currentQuestion].answer là câu trả lời đúng
        setScore(score - 1); // Trừ điểm 
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitAnswer = () => {
    setQuizEnd(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers({});
    setQuizEnd(false);
  };

  return (
    <div className="container mb-4">
      {!quizEnd ? (
        <div>
          <h2 style={{ color: "red" }}>Question {currentQuestion + 1}</h2>

          <h4>{questions[currentQuestion].question}</h4>

          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswers[questions[currentQuestion].id] === option}
                  onChange={handleRadioChange}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            style={{
              color: "white",
              backgroundColor: "red",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            disabled={currentQuestion === 0}
          >
            Back
          </button>

          {currentQuestion < questions.length - 1 && (
            <button
              onClick={handleNext}
              style={{
                color: "white",
                backgroundColor: "red",
                borderRadius: "5px",
              }}
            >
              Next
            </button>
          )}

          {currentQuestion === questions.length - 1 && (
            <button
              onClick={handleSubmitAnswer}
              style={{
                color: "white",
                backgroundColor: "red",
                borderRadius: "5px",
              }}
            >
              Submit
            </button>
          )}
        </div>
      ) : (
        <div>
          <h2 style={{ color: "red" }}>Quiz Complete!</h2>
          <p>Your score is {score}</p>

          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
