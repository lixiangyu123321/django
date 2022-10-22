from django.http import HttpResponse


def listorder(request):
    return HttpResponse("下面是系统的所有订单信息。。。")
