import { useTranslation } from "next-i18next"
import { Box, Center, Flex, type FlexProps } from "@chakra-ui/react"

import type { TranslationKey } from "@/lib/types"

import { Image, type ImageProps } from "@/components/Image"
import OldHeading from "@/components/OldHeading"
import Text from "@/components/OldText"

export interface IProps extends FlexProps {
  children?: React.ReactNode
  image: ImageProps["src"]
  imageWidth?: ImageProps["width"]
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  alt: string
}

const CalloutBanner: React.FC<IProps> = ({
  image,
  imageWidth,
  titleKey,
  descriptionKey,
  alt,
  children,
  ...restProps
}) => {
  const { t } = useTranslation("page-staking")

  return (
    <Flex
      as="aside"
      direction={{ base: "column", lg: "row-reverse" }}
      bg="layer2Gradient"
      p={{ base: 8, sm: 12 }}
      borderRadius="base"
      {...restProps}
    >
      {image && (
        <Flex>
          <Image
            src={image}
            alt={alt}
            w={imageWidth}
            maxW={`${maxImageWidth}px`}
            style={{
              objectFit: "contain",
            }}
            alignSelf="center"
            mt={-24}
            mb={{ base: 0, lg: -24 }}
          />
        </Flex>
      )}
      <Flex
        flexGrow={1}
        flexShrink={0}
        flexBasis="50%"
        direction="column"
        justifyContent="center"
        ps={{ base: 0, sm: 4, lg: 8 }}
        w={{ base: "full", lg: "inherit" }}
      >
        <OldHeading
          as="h2"
          mt={0}
          fontSize={{ base: "2xl", sm: "2rem" }}
          lineHeight="1.4"
        >
          {t(titleKey)}
        </OldHeading>
        <Text fontSize="xl" w="90%" lineHeight="140%" mb={8} color="text200">
          {t(descriptionKey)}
        </Text>
        {children}
      </Flex>
    </Flex>
  )
}

export default CalloutBanner
