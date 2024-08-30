class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> get shuffledAnswer {
    //Design Pattern: Chaining
    //final shuffledList = List.of(answers).shuffled;

    final shuffledList = List.of(answers);
    shuffledList.shuffle();
    return shuffledList;
  }
}