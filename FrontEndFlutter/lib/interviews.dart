import 'package:flutter/material.dart';

class Interviews extends StatefulWidget {
  const Interviews({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<Interviews> createState() => _InterviewsState();
}

class _InterviewsState extends State<Interviews> {
  late TextEditingController controller;
  String name = "";
  var _date = null;
  var _time = null;

  var child;

  get children => null;

  @override
  void initState() {
    super.initState();
    controller = TextEditingController();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  Future<void> _dateSelection() async {
    DateTime? _pickedDate = await showDatePicker(
        context: context,
        initialDate: DateTime.now(),
        firstDate: DateTime(1900),
        lastDate: DateTime(2030));
    if (_pickedDate != null) {
      setState(() {
        _date = _pickedDate;
      });
    }
  }

  Future<void> _timeSelection() async {
    TimeOfDay? _pickedTime =
        await showTimePicker(context: context, initialTime: TimeOfDay.now());
    if (_pickedTime != null) {
      setState(() {
        _time = _pickedTime;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final isKeyboard = MediaQuery.of(context).viewInsets.bottom != 0;
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: Colors.white,
      // appBar: AppBar(
      //   title: Text(widget.title),
      //   backgroundColor: Colors.teal,
      // ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            // const Text(
            //   "Interviews Schedule",
            //   style: TextStyle(
            //       fontWeight: FontWeight.bold,
            //       fontSize: 20,
            //       color: Colors.teal),
            // ),
            const Padding(padding: EdgeInsets.only(bottom: 20)),
            ElevatedButton(
              child: const Text(
                "Select an Interview Date",
                style: TextStyle(color: Colors.white),
              ),
              style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.blue),
                  elevation: MaterialStateProperty.all(8)),
              onPressed: _dateSelection,
            ),
            const Padding(padding: EdgeInsets.only(bottom: 20)),
            const Text("Picked date is: "),
            const Padding(padding: EdgeInsets.only(bottom: 20)),
            Text(
              _date == null
                  ? "No picked date!"
                  : '${_date.day}/${_date.month}/${_date.year}',
              style: _date == null
                  ? const TextStyle(color: Colors.blue)
                  : const TextStyle(
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                      fontSize: 25),
            ),
            ElevatedButton(
              child: const Text("Select Interview Time",
                  style: TextStyle(color: Colors.white)),
              style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.blue),
                  elevation: MaterialStateProperty.all(8)),
              onPressed: _timeSelection,
            ),
            const Padding(padding: EdgeInsets.only(bottom: 20)),
            const Text("Picked time is: "),
            const Padding(padding: EdgeInsets.only(bottom: 10)),
            Text(
              _time == null ? "No time chosen!" : '${_time.format(context)}',
              style: _time == null
                  ? const TextStyle(color: Colors.blue)
                  : const TextStyle(
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                      fontSize: 25),
            ),
            const Padding(padding: EdgeInsets.only(bottom: 20)),
            ElevatedButton(
              child: const Text(
                " Condidate Name",
                style: TextStyle(color: Colors.white),
              ),
              style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.blue),
                  elevation: MaterialStateProperty.all(8)),
              onPressed: () async {
                final name = await openDialog();
                if (name == null || name.isEmpty) return;
                setState(() => this.name = name);
              },
            ),
          ],
        ),
      ),
    );
  }

  void submit() {
    Navigator.of(context).pop(controller.text);
  }

  Future<String?> openDialog() => showDialog<String>(
        context: context,
        builder: (context) => AlertDialog(
          title: Text('Condidat Name : '),
          content: TextField(
            autofocus: true,
            decoration: InputDecoration(hintText: 'Enter condidate name'),
          ),
          actions: [
            TextButton(
              child: Text('SUBMIT'),
              onPressed: submit,
            ),
          ],
        ),
      );
}
