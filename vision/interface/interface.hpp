#include <ros/ros.h>
#include <image_transport/image_transport.h>
#include <cv_bridge/cv_bridge.h>
#include <sensor_msgs/image_encodings.h>
#include <opencv2/imgproc/imgproc.hpp>
#include <opencv2/highgui/highgui.hpp>
#include <vector>
#include <iostream>
#include <fstream>
#include <vision/parameterbutton.h>
#include "vision/center.h"
#include"vision/white.h"
#include"vision/camera.h"
#include"vision/black.h"
#include"vision/colorbutton.h"
#include"vision/scan.h"
#include "vision/color.h"
#include <stdio.h>
#include <stdlib.h>
class InterfaceProc
{
private:
  ros::NodeHandle nh;
  image_transport::ImageTransport it_;
  image_transport::Subscriber image_sub_;
	image_transport::Publisher image_pub_threshold_;
    ros::Subscriber s1;
    ros::Subscriber s2;
    ros::Subscriber s3;
    ros::Subscriber s4;
    ros::Subscriber s5;
    ros::Subscriber s6;
    ros::Subscriber s7;
    ros::Subscriber s8;

	cv::Mat *frame;
	cv::Mat *gray;

public:
  InterfaceProc();
  ~InterfaceProc();
    int buttonmsg;
    int CenterXMsg;
    int CenterYMsg;
    int InnerMsg;
    int OuterMsg;
    int FrontMsg;
    int Camera_HighMsg;
    int colorbottonMsg;
    int Angle_Near_GapMsg;
    int Magn_Near_GapMsg;
    int Magn_Near_StartMsg;
    int Magn_Middle_StartMsg;
    int Magn_Far_StartMsg;
    int Magn_Far_EndMsg;
    int Dont_Search_Angle_1Msg;
    int Dont_Search_Angle_2Msg;
    int Dont_Search_Angle_3Msg;
    int Angle_range_1Msg;
    int Angle_range_2_3Msg;
    int BlackGrayMsg;
    int BlackAngleMsg;
    int WhiteGrayMsg;
    int WhiteAngleMsg;
    int fpsMsg;
    int BallHSVBoxMsg[6];
    int GreenHSVBoxMsg[6];
    int BlueHSVBoxMsg[6];
    int YellowHSVBoxMsg[6];
    int WhiteHSVBoxMsg[6];
    int ColorModeMsg;
	void imageCb(const sensor_msgs::ImageConstPtr&);
	void ParameterButtonCall(const vision::parameterbutton);
    void colorcall(const vision::color);
    void centercall(const vision::center);
    void whitecall(const vision::white);
    void cameracall(const vision::camera);
    void blackcall(const vision::black);
    void colorbuttoncall(const vision::colorbutton);
    void scancall(const vision::scan);
	cv::Mat Gray(const cv::Mat iframe);
};
