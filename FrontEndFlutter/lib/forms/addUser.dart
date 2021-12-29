import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class AddUser extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: context.canvasColor,
      body: SingleChildScrollView(
        child: Container(
          padding: Vx.m32,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              "Employee".text.xl5.bold.color(context.theme.accentColor).make(),
              "create a new employee".text.xl2.make(),
              CupertinoFormSection(
                  header: "Personal Details".text.make(),
                  children: [
                    CupertinoFormRow(
                      child: CupertinoTextFormFieldRow(
                        placeholder: "Enter firstname",
                      ),
                      prefix: "FirstName".text.make(),
                    ),

                    CupertinoFormRow(
                      child: CupertinoTextFormFieldRow(
                        placeholder: "Enter lastname",
                      ),
                      prefix: "LastName".text.make(),
                    ),

                    CupertinoFormRow(
                      child: CupertinoTextFormFieldRow(
                        placeholder: "Enter phone",
                      ),
                      prefix: "Phone".text.make(),
                    ),
                    CupertinoFormRow(
                      child: CupertinoTextFormFieldRow(
                        placeholder: "Enter Cin number",
                      ),
                      prefix: "Cin".text.make(),
                    ),

                  ]),
              CupertinoFormSection(header: "User".text.make(), children: [
                CupertinoFormRow(
                  child: CupertinoTextFormFieldRow(
                    placeholder: "Enter email",
                  ),
                  prefix: "Email".text.make(),
                ),

                CupertinoFormRow(
                  child: CupertinoTextFormFieldRow(
                    obscureText: true,
                  ),
                  prefix: "Password".text.make(),
                ),
                CupertinoFormRow(
                  child: CupertinoTextFormFieldRow(
                    obscureText: true,
                  ),
                  prefix: "Confirmed Password".text.make(),
                )
              ]),
              CupertinoFormSection(
                  children: [
                    CupertinoFormRow(
                      child: CupertinoSwitch(
                        value: true,
                        onChanged: (value) {},
                      ),
                      prefix: "I Agree".text.make(),
                    ),
                  ]),
              20.heightBox,
              Material(
                color: context.theme.buttonColor,
                borderRadius: BorderRadius.circular(8),
                child: InkWell(
                  child: AnimatedContainer(
                    duration: Duration(seconds: 1),
                    width: 150,
                    height: 50,
                    alignment: Alignment.center,
                    child: Text(
                      "Register",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),
                    ),
                  ),
                ),
              ).centered(),
            ],
          ),
        ),
      ),
    );
  }
}