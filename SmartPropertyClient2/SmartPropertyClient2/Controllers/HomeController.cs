using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace SmartPropertyClient2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult User1()
        {
            return View();
        }

        public ActionResult User2(string Id)
        {
            ViewBag.Id = Id == "" ? Id : "0x0e7e4e2b408adff6daf54260cefca330056a185c";
            return View();
        }

        public ActionResult Success()
        {
            return View();
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult CallBack(/*string Id, string startDate, string endDate*/)
        {
            Thread.Sleep(2000);
            HttpHelper.CreatePostHttpResponse();
            return RedirectToAction("Success");
        }

        public class HttpHelper
        {
            public static string DateTimeToUnixTimestamp(DateTime dateTime)
            {
                var start = new DateTime(1970, 1, 1, 0, 0, 0, dateTime.Kind);
                return Convert.ToInt64((dateTime - start).TotalSeconds).ToString();
            }

            public static HttpWebResponse CreatePostHttpResponse()
            {
                string url = "https://servlet.sciener.cn/key/send";
                HttpWebRequest request = null;
                if (url.StartsWith("https", StringComparison.OrdinalIgnoreCase))
                {
                    request = WebRequest.Create(url) as HttpWebRequest;
                }
                else
                {
                    request = WebRequest.Create(url) as HttpWebRequest;
                }
                request.Method = "POST";
                request.ContentType = "application/x-www-form-urlencoded";
                request.Headers["appId"] = "04b8df555631488da09f908d0668960f";
                request.Headers["appSecret"] = "fd54be13b9d64e0e94e51c8829fd5d2d";
                request.Headers["platform"] = "Android-3.3";
                request.Headers["version"] = "1.0";

                StringBuilder buffer = new StringBuilder();

                buffer.AppendFormat("remarks=测试");
                buffer.AppendFormat("&packageName=com.scaf.android.client&lockKey=NjUsNjcsNjUsNzEsNzEsNzEsNzMsNjUsNjQsNjcsMTU=");
                buffer.AppendFormat("&date={0}", DateTimeToUnixTimestamp(DateTime.Now));
                buffer.AppendFormat("&uid=3082");
                buffer.AppendFormat("&roomId=2949");
                buffer.AppendFormat("&keyboardPwdSequence=");
                buffer.AppendFormat("&startDate=1452307582088");//变量
                buffer.AppendFormat("&endDate=1552332782088");//变量
                buffer.AppendFormat("&receiverUsername=15585126593");//房客
                buffer.AppendFormat("&userid={0}", HttpUtility.UrlEncode("刘志明"));//房主
                byte[] data = Encoding.UTF8.GetBytes(buffer.ToString());
                using (Stream stream = request.GetRequestStream())
                {
                    stream.Write(data, 0, data.Length);
                }
                
                string[] values = request.Headers.GetValues("Content-Type");
                return request.GetResponse() as HttpWebResponse;
            }

        }


    }
}
