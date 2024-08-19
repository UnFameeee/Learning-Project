import 'package:flutter/material.dart';
import 'package:rolldice/dice_roller.dart';
import 'package:rolldice/styled_text.dart';

var startAlignment = Alignment.topLeft;
var bottomAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  //const GradientContainer({key}) : super(key: key);
  //const GradientContainer({super.key, required this.colors});
  const GradientContainer(this.color1, this.color2, {super.key});

  //define contructor-function
  const GradientContainer.purple({super.key})
      : color1 = Colors.deepPurple,
        color2 = Colors.indigo;

  final Color color1;
  final Color color2;

  @override
  Widget build(context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [color1, color2],
          begin: startAlignment,
          end: bottomAlignment,
        ),
      ),
      child: const Center(
        child: DiceRoller(),
      ),
    );
  }
}
