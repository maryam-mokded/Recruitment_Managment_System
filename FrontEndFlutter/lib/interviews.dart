import 'dart:ffi';
import 'package:intl/intl.dart';
import 'package:flutter/material.dart';

class Interviews extends StatefulWidget {
  const Interviews({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<Interviews> createState() => _InterviewsState();
}

class _InterviewsState extends State<Interviews> {
  bool _isTimeSelected = false;
  bool _isDateSelected = false;
  bool _isDateRangeSelected = false;

  TimeOfDay currentTime = TimeOfDay.now();
  DateTime currentDate = DateTime.now();
  DateTimeRange currentRange = DateTimeRange
  (start: DateTime.now(),
   end: DateTime.now().add(Duration(days: 3)),
   );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: Text('DatePicker'),
      // ),
      body: Container(
        child: ListView(
          children: [
            Card(
              child: ListTile(
                leading: Icon(Icons.timer),
                trailing: Icon(Icons.edit),
                title: _isTimeSelected
                    ? Text('${currentTime.format(context).toString()}')
                    : Text('Select your Time '),
                onTap: () {
                  _selectTime(context);
                },
              ),
            ),
            Card(
              child: ListTile(
                leading: Icon(Icons.calendar_today),
                trailing: Icon(Icons.edit),
                title: _isDateSelected 
                // ? Text('${currentDate.day} / ${currentDate.month} / ${currentDate.year} ')
                    ? Text(DateFormat('EEE, M/d/y').format(currentDate))
                    : Text('Select your Date'),
                onTap: () {
          _selectDate(context);

                },
              ),
            ),
             Card(
              child: ListTile(
                leading: Icon(Icons.date_range),
                trailing: Icon(Icons.edit),
                title: _isDateRangeSelected 
                // ? Text('${currentDate.day} / ${currentDate.month} / ${currentDate.year} ')
                    ? Text("${DateFormat.yMd().format(currentRange.start)} to ${DateFormat.yMd().format(currentRange.end)}")
                    : Text('Select your Date Range'),
                onTap: () {
          _selectDateRange(context);

                },
              ),
            )
          ],
        ),
      ),
    );
  }

  Future<void> _selectTime(BuildContext context) async {
    TimeOfDay? pickedTime = await showTimePicker(
      context: context,
      initialTime: currentTime,
      initialEntryMode:  TimePickerEntryMode.dial
      helpText: 'Choose your Time',
      confirmText: 'Choose Now',
      cancelText: 'Later',
      
    );
    if (pickedTime != null && pickedTime != currentTime) {
      setState(() {
        currentTime = pickedTime;
        _isTimeSelected = true;
      });
    }
  }

  Future<void> _selectDate(BuildContext context) async {
   final DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: currentDate,
      firstDate:DateTime(2021,1,1),
      lastDate:DateTime(2030,12,31),

      //initialEntryMode:  DatePickerEntryMode.dial,
      helpText: 'Choose your Date',
      confirmText: 'Choose Now',
      cancelText: 'Later',
    );
    if (pickedDate != null && pickedDate != currentDate) {
      setState(() {
        currentDate = pickedDate;
        _isDateSelected = true;
      });
    }
}



  Future<void> _selectDateRange(BuildContext context) async {
   final DateTimeRange? pickedDateRange = await showDateRangePicker(
      context: context,
      initialDateRange: currentRange,
      firstDate:DateTime(2021,1,1),
      lastDate:DateTime(2030,12,31),

      //initialEntryMode:  DatePickerEntryMode.dial,
      helpText: 'Choose your Date Range',
      confirmText: 'Choose Now',
      cancelText: 'Later',
      errorInvalidRangeText : 'Invalid Date Range ',
    );
    if (pickedDateRange != null && pickedDateRange != currentRange) {
      setState(() {
        currentRange = pickedDateRange;
        _isDateRangeSelected = true;
      });
    }
}
}