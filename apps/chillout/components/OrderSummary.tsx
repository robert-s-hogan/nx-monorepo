import { Button, Text, Heading, Flex } from '@with-nx/react-ui';
import { FiMail, FiDownloadCloud, FiInfo } from 'react-icons/fi';
import { useState } from 'react';

interface OrderSummaryProps {
  subtotal?: {
    license?: string;
    products?: string;
  };
  total?: string;
  onContinuePress?: () => void;
  onSendEmailInvoiceDetailsPress?: () => void;
  onExportPDFInvoiceDetailsPress?: () => void;
  onPayByCardPress?: () => void;
  onUploadPurchaseOrderPress?: () => void;
  step?: 'continue' | 'pay';
  licensors?: string[];
  canPay?: boolean;
  canProgress?: boolean;
  press?: ((event?: any) => void | Promise<void>) | undefined | null;
}

export const OrderSummary = ({
  subtotal,
  total,
  onContinuePress,
  onSendEmailInvoiceDetailsPress,
  onExportPDFInvoiceDetailsPress,
  onPayByCardPress,
  onUploadPurchaseOrderPress,
  step,
  licensors,
  canPay = false,
  canProgress,
}: OrderSummaryProps) => {
  const [drop, _drop] = useState(false);
  const [agree, _agree] = useState(false);

  return (
    <div className="w-full p-5 bg-foreground space-y-4">
      <Heading level={2} className="text-base block mb-12">
        Order Summary
      </Heading>
      {subtotal?.products ? (
        <Flex className="items-center mb-16 justify-between">
          <Text className="">Subtotal: </Text>
          <Text className="text-font-two">{subtotal.products}</Text>
        </Flex>
      ) : undefined}
      <div className="mb-16 h-1 w-full text-accent" />
      <Flex className="items-center mb-16 justify-between">
        <Text className="">Total: </Text>
        <Text className="text-font-one">{total}</Text>
      </Flex>
      {step === 'pay' ? (
        <>
          <Button
            disabled={!agree || !canPay}
            onClick={onPayByCardPress}
            className="w-full flex items-center justify-center mb-4"
            icon="card/bold"
          >
            Pay by Card
          </Button>
          <Flex className="items-center my-12">
            <div className="h-1" />
            <div className="inline-flex">
              <Text className="mx-10">OR</Text>
            </div>
            <div className="h-1" />
          </Flex>
          <Button
            disabled={!agree || !canPay}
            onClick={onUploadPurchaseOrderPress}
            className="w-full flex items-center justify-center mb-4"
          >
            Pay by Card
          </Button>
          <div className="flex items-start">
            {/* <DesignedCheck active={agree} onClick={() => _agree(!agree)} /> */}
            <div className="ml-10" onClick={() => _agree(!agree)}>
              <Text className="">
                Have read and agree to the privacy policy and terms of service
              </Text>
            </div>
          </div>
        </>
      ) : (
        <>
          <Button
            onClick={onContinuePress}
            disabled={!canProgress}
            className="btn-primary w-full flex items-center justify-center mb-4"
          >
            Continue
          </Button>
          <div
            onMouseEnter={() => _drop(true)}
            onMouseLeave={() => _drop(false)}
          >
            <div className="p:relative">
              <Button
                onClick={onExportPDFInvoiceDetailsPress}
                className="btn-outline w-full flex items-center justify-center mb-4"
              >
                Export Invoice Details…
              </Button>
              {drop ? (
                <div className="w-full h-auto absolute unset-0 pt-12 bg-foreground border-accent">
                  <div className="pa-12 bg-foreground border-accent">
                    <Flex
                      className="mb-16 items-center"
                      onClick={() => {
                        _drop(false);

                        if (onSendEmailInvoiceDetailsPress) {
                          onSendEmailInvoiceDetailsPress();
                        }
                      }}
                    >
                      <FiMail size={20} className="text-font-three" />
                      <Text className="text-font-one">Send by Email</Text>
                    </Flex>
                    <Flex
                      className="mb-0 items-center"
                      onClick={() => {
                        _drop(false);

                        if (onExportPDFInvoiceDetailsPress) {
                          onExportPDFInvoiceDetailsPress();
                        }
                      }}
                    >
                      <FiDownloadCloud size={20} className="text-font-three" />
                      <Text className="text-font-one">Download PDF</Text>
                    </Flex>
                  </div>
                </div>
              ) : undefined}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
