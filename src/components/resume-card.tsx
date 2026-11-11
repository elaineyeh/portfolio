"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string; // Use HTML string
  expandLabel?: string;
  collapseLabel?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  expandLabel = "Expand experience",
  collapseLabel = "Collapse experience",
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const contentId = `experience-${title.replace(/\W+/g, "-")}-${period.replace(/\W+/g, "-")}`;

  return (
    <Card className="resume-card flex gap-4 border p-4 shadow-none">
        <div className="flex-none">
          <Avatar className="size-12 border bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="min-w-0 flex-grow">
          <CardHeader className="p-0">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="flex flex-wrap items-center gap-2 text-sm font-semibold leading-5">
                  {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                </h3>
                {subtitle && <div className="mt-1 text-xs text-muted-foreground">{subtitle}</div>}
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3 text-left text-xs tabular-nums text-muted-foreground sm:justify-end sm:text-right">
                {period && <span>{period}</span>}
                {!description && href && href !== "#" && (
                  <Link className="resume-link inline-flex items-center gap-1 text-xs" href={href} target="_blank" rel="noreferrer">
                    <ExternalLinkIcon className="size-3" />
                  </Link>
                )}
              </div>
            </div>
          </CardHeader>
          {description && (
            <>
              <div className="mt-3 flex flex-wrap items-center gap-3 print:hidden">
                <button
                  type="button"
                  className="resume-link inline-flex items-center gap-1 text-xs font-medium"
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  onClick={() => setIsExpanded((expanded) => !expanded)}
                >
                  <ChevronDownIcon className={cn("size-4 transition-transform", isExpanded && "rotate-180")} />
                  {isExpanded ? collapseLabel : expandLabel}
                </button>
                {href && href !== "#" && (
                  <Link className="resume-link inline-flex items-center gap-1 text-xs" href={href} target="_blank" rel="noreferrer">
                    Company site <ExternalLinkIcon className="size-3" />
                  </Link>
                )}
              </div>
              <motion.div
                id={contentId}
                initial={false}
                animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="resume-description mt-4 overflow-hidden text-xs leading-6 sm:text-sm"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </>
          )}
        </div>
    </Card>
  );
};
