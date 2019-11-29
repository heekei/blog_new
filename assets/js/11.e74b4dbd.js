(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{222:function(s,n,e){"use strict";e.r(n);var a=e(2),i=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"wpf-透明自定义窗口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wpf-透明自定义窗口"}},[s._v("#")]),s._v(" WPF 透明自定义窗口")]),s._v(" "),e("p",[s._v("重写了标题栏，最大化、还原、最小化功能。")]),s._v(" "),e("p",[s._v("突然发现忘记加上程序的标题了，算了，懒得添加了。")]),s._v(" "),e("p",[s._v("MainWindow.xaml代码如下：")]),s._v(" "),e("div",{staticClass:"language-cs line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    using System;\n    using System.Collections.Generic;\n    using System.Linq;\n    using System.Text;\n    using System.Threading.Tasks;\n    using System.Windows;\n    using System.Windows.Controls;\n    using System.Windows.Data;\n    using System.Windows.Documents;\n    using System.Windows.Input;\n    using System.Windows.Media;\n    using System.Windows.Media.Imaging;\n    using System.Windows.Navigation;\n    using System.Windows.Shapes;\n    using System.Runtime.InteropServices;\n\n    namespace WpfApplication1\n    {\n        /// \n        /// MainWindow.xaml 的交互逻辑\n        /// \n        public partial class MainWindow : Window\n        {\n            public MainWindow()\n            {\n                InitializeComponent();\n            }\n            private bool IsMaximized = false;\n            private Rect rcNormal;\n            private void TopBorder_MouseLeftButtonDown(object sender, MouseButtonEventArgs e)\n            {\n\n                if (e.ClickCount == 1)\n                {\n                    this.DragMove();\n                }\n                if (e.ClickCount == 2)\n                {\n                    MaxOrNormal();\n                }\n            }\n\n            private void btnClose_Click(object sender, RoutedEventArgs e)\n            {\n                this.Close();\n            }\n\n            private void btnClose_MouseMove(object sender, MouseEventArgs e)\n            {\n                bgOfClose.Fill = new SolidColorBrush(Colors.Red);\n            }\n\n            private void btnClose_MouseLeave(object sender, MouseEventArgs e)\n            {\n                bgOfClose.Fill = new SolidColorBrush(Colors.Black);\n            }\n\n            private void btnMin_MouseMove(object sender, MouseEventArgs e)\n            {\n                bgOfMin.Fill = new SolidColorBrush(Colors.Gray);\n            }\n\n            private void btnMin_MouseLeave(object sender, MouseEventArgs e)\n            {\n                bgOfMin.Fill = new SolidColorBrush(Colors.Black);\n            }\n\n            private void btnMin_Click(object sender, MouseButtonEventArgs e)\n            {\n                this.WindowState = WindowState.Minimized;\n            }\n\n            private void Window_SizeChanged(object sender, SizeChangedEventArgs e)\n            {\n                if (this.ActualHeight &gt; SystemParameters.WorkArea.Height || this.ActualWidth &gt; SystemParameters.WorkArea.Width)\n                {\n                    this.WindowState = System.Windows.WindowState.Normal;\n                    MaxOrNormal();\n                }\n                //else\n                //{\n                //    winBorder.CornerRadius = new CornerRadius(10);\n                //    TopBorder.CornerRadius = new CornerRadius(10, 10, 0, 0);\n                //}\n            }\n\n            private void winBorder_SizeChanged(object sender, SizeChangedEventArgs e)\n            {\n                TopBorder.Width = this.Width;\n            }\n\n            private void Grid_SizeChanged(object sender, SizeChangedEventArgs e)\n            {\n                TopBorder.Width = this.Width;\n            }\n\n            private void btnMax_Click(object sender, MouseButtonEventArgs e)\n            {\n                MaxOrNormal();\n\n            }\n\n            private void btnMax_MouseMove(object sender, MouseEventArgs e)\n            {\n                bgOfMax.Fill = new SolidColorBrush(Colors.Gray);\n            }\n\n            private void btnMax_MouseLeave(object sender, MouseEventArgs e)\n            {\n                bgOfMax.Fill = new SolidColorBrush(Colors.Black);\n            }\n\n            private void MaxOrNormal() {\n                if (IsMaximized)\n                {\n                    IsMaximized = false;\n                    this.Left = rcNormal.Left;\n                    this.Top = rcNormal.Top;\n                    this.Width = rcNormal.Width;\n                    this.Height = rcNormal.Height;\n                    this.ResizeMode = ResizeMode.CanResizeWithGrip;\n                    winBorder.CornerRadius = new CornerRadius(10);\n                    TopBorder.CornerRadius = new CornerRadius(10, 10, 0, 0);\n                }\n                else\n                {\n                    IsMaximized = true;\n                    rcNormal = new Rect(this.Left, this.Top, this.Width, this.Height);//保存下当前位置与大小\n                    Rect rc = SystemParameters.WorkArea;\n                    this.Left = 0;\n                    this.Top = 0;\n                    this.Width = rc.Width;\n                    this.Height = rc.Height;\n                    this.ResizeMode = ResizeMode.CanResize;\n                    winBorder.CornerRadius = new CornerRadius(0);\n                    TopBorder.CornerRadius = new CornerRadius(0);\n                }\n            }\n        }\n    }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br"),e("span",{staticClass:"line-number"},[s._v("118")]),e("br"),e("span",{staticClass:"line-number"},[s._v("119")]),e("br"),e("span",{staticClass:"line-number"},[s._v("120")]),e("br"),e("span",{staticClass:"line-number"},[s._v("121")]),e("br"),e("span",{staticClass:"line-number"},[s._v("122")]),e("br"),e("span",{staticClass:"line-number"},[s._v("123")]),e("br"),e("span",{staticClass:"line-number"},[s._v("124")]),e("br"),e("span",{staticClass:"line-number"},[s._v("125")]),e("br"),e("span",{staticClass:"line-number"},[s._v("126")]),e("br"),e("span",{staticClass:"line-number"},[s._v("127")]),e("br"),e("span",{staticClass:"line-number"},[s._v("128")]),e("br"),e("span",{staticClass:"line-number"},[s._v("129")]),e("br"),e("span",{staticClass:"line-number"},[s._v("130")]),e("br"),e("span",{staticClass:"line-number"},[s._v("131")]),e("br"),e("span",{staticClass:"line-number"},[s._v("132")]),e("br"),e("span",{staticClass:"line-number"},[s._v("133")]),e("br"),e("span",{staticClass:"line-number"},[s._v("134")]),e("br"),e("span",{staticClass:"line-number"},[s._v("135")]),e("br"),e("span",{staticClass:"line-number"},[s._v("136")]),e("br"),e("span",{staticClass:"line-number"},[s._v("137")]),e("br"),e("span",{staticClass:"line-number"},[s._v("138")]),e("br"),e("span",{staticClass:"line-number"},[s._v("139")]),e("br"),e("span",{staticClass:"line-number"},[s._v("140")]),e("br")])])])}),[],!1,null,null,null);n.default=i.exports}}]);