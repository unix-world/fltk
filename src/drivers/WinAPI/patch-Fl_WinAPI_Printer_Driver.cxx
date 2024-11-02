--- Fl_WinAPI_Printer_Driver.cxx.orig
+++ Fl_WinAPI_Printer_Driver.cxx
@@ -14,6 +14,9 @@
 //     https://www.fltk.org/bugs.php
 //
 
+// modified by unixman # r.20241016
+// 	* fix build with Windows 11 and LLVM 64-bit: winspool.h on LLVM 64-bit does not support: DocumentProperties(), OpenPrinter(), ClosePrinter()
+
 #include "../GDI/Fl_GDI_Graphics_Driver.H"
 #include <FL/Fl_PDF_File_Surface.H>
 #include <FL/Fl_Paged_Device.H>
@@ -136,8 +139,9 @@
   int err = 0;
   abortPrint = FALSE;
 
-  HANDLE hPr2;
-  err = OpenPrinterA(pdf_printer_name_, &hPr2, NULL);
+//HANDLE hPr2;
+//err = OpenPrinterA(pdf_printer_name_, &hPr2, NULL);
+  err = 0;
   if (err == 0) {
     if (perr_message) {
       int l = 240;
@@ -149,14 +153,19 @@
     return 1;
   }
   HWND hwndOwner = fl_win32_xid(Fl::first_window());
-  LONG count = DocumentPropertiesA(hwndOwner, hPr2, pdf_printer_name_, NULL, NULL, 0);
-  if (count <= 0) { ClosePrinter(hPr2); return 1; }
+  //LONG count = DocumentPropertiesA(hwndOwner, hPr2, pdf_printer_name_, NULL, NULL, 0);
+  LONG count = 0;
+  if (count <= 0) {
+      //ClosePrinter(hPr2);
+      return 1;
+  }
   char *buffer = new char[count];
   DEVMODEA *pDevMode = (DEVMODEA*)buffer;
   memset(buffer, 0, count);
   pDevMode->dmSize = count;
-  count = DocumentPropertiesA(hwndOwner, hPr2, pdf_printer_name_, pDevMode, NULL, DM_OUT_BUFFER | DM_IN_PROMPT);
-  ClosePrinter(hPr2);
+//count = DocumentPropertiesA(hwndOwner, hPr2, pdf_printer_name_, pDevMode, NULL, DM_OUT_BUFFER | DM_IN_PROMPT);
+  count = 0;
+//ClosePrinter(hPr2);
   if (count == IDCANCEL || count < 0) { delete[] buffer; return 1; }
 
   Fl_Native_File_Chooser fnfc;
