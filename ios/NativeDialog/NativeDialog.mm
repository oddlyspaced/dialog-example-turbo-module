//
//  NativeDialog.m
//  DialogExampleTurboModule
//
//  Created by Hardik Srivastava on 22/03/25.
//

#import "NativeDialog.h"
#import "DialogExampleTurboModule-Swift.h"

@implementation NativeDialog

RCT_EXPORT_MODULE()

NativeDialogImpl *nativedialogimpl = [[NativeDialogImpl alloc] init];


- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeDialogSpecJSI>(params);
}


- (void)showDialog:(nonnull NSString *)text resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  return [nativedialogimpl showDialog:text resolve:resolve reject:reject];
}

@end
